import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ============================================================
// CONFIGURACIÓN
// ============================================================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================
// HELPERS
// ============================================================

function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");
}

function sanitizeFileName(str) {
  let name = toCamelCase(str);
  if (/^\d/.test(name)) name = "_" + name;
  return name;
}

function getVarNameFromId(id) {
  return id.replace(/-/g, "_");
}

function objectDataBuilder(object, key, indent = "  ") {
  return `${indent}${key}: ${JSON.stringify(object[key])},\n`;
}

function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    return true;
  }
  return false;
}

function saveFile(filePath, content, logMsg) {
  fs.writeFileSync(filePath, content);
  if (logMsg) console.log(logMsg);
}

function jsStringify(obj, indent = "") {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return "[]";
    return "[\n" + obj.map(v => indent + "  " + jsStringify(v, indent + "  ")).join(",\n") + "\n" + indent + "]";
  }
  if (typeof obj === 'object' && obj !== null) {
    const keys = Object.keys(obj);
    if (keys.length === 0) return "{}";
    return "{\n" + keys.map(k => {
      const keyStr = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
      return indent + "  " + keyStr + ": " + jsStringify(obj[k], indent + "  ");
    }).join(",\n") + "\n" + indent + "}";
  }
  return JSON.stringify(obj);
}

// ============================================================
// GENERADORES DE CONTENIDO
// ============================================================

function topicDataGenerator(classNum, topicNum, topicData) {
  let content = "";
  
  for (const block of topicData) {
    content += `  {\n`;
    content += `    type: "${block.type}",\n`;
    content += `    info: ${JSON.stringify(block.info, null, 4).replace(/\n/g, '\n    ')},\n`;
    
    if (block.height) content += `    height: ${JSON.stringify(block.height)},\n`;
    if (block.width) content += `    width: ${JSON.stringify(block.width)},\n`;
    if (block.hasBT !== undefined) content += `    hasBT: ${block.hasBT},\n`;
    if (block.columns !== undefined) content += `    columns: ${block.columns},\n`;
    if (block.title) content += `    title: ${JSON.stringify(block.title)},\n`;
    if (block.answer) content += `    answer: ${JSON.stringify(block.answer)},\n`;
    
    content += `  },\n`;
  }
  
  return `// ============================================================
// Clase ${classNum} - Tema ${topicNum}
// Datos del tema
// ============================================================

export const topicData = [
${content}];
`;
}

// ============================================================
// FUNCIONES DE PROCESAMIENTO
// ============================================================

async function loadOriginalData(inputFile) {
  console.log(`📖 Importando archivo: ${inputFile}`);
  
  try {
    const absolutePath = path.resolve(inputFile);
    const fileUrl = `file://${absolutePath}`;
    const module = await import(fileUrl);
    const classes = module.default || module.classes;
    
    if (!classes) {
      throw new Error('No se encontró "classes" en el archivo');
    }
    
    if (!Array.isArray(classes)) {
      throw new Error(`"classes" no es un array, es: ${typeof classes}`);
    }
    
    console.log(`✅ Clases encontradas: ${classes.length}`);
    return classes;
  } catch (error) {
    throw new Error(`Error al importar el archivo: ${error.message}`);
  }
}

function prepareOutputDir(outputDir) {
  if (fs.existsSync(outputDir)) {
    console.log(`🗑️  Limpiando directorio existente: ${outputDir}`);
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`📁 Directorio creado: ${outputDir}`);
}

function processTopic(topicObj, classPath) {
  const topicId = topicObj.topic;
  const topicVarName = `topic${topicId}`;
  const topicFolderName = `topic-${topicId}`;
  const topicPath = path.join(classPath, topicFolderName);
  
  ensureDirectory(topicPath);
  
  // 1. Generar data.js con items individuales
  let dataContent = "";
  const itemNames = [];
  
  topicObj.topicData.forEach((item, index) => {
    const itemName = `item${index + 1}`;
    itemNames.push(itemName);
    dataContent += `export const ${itemName} = ${jsStringify(item, "")};\n\n`;
  });
  
  saveFile(path.join(topicPath, 'data.js'), dataContent);
  
  // 2. Generar topic-X.js DENTRO de class-X/
  let topicWrapper = `import { ${itemNames.join(", ")} } from "./${topicFolderName}/data.js";\n\n`;
  topicWrapper += `export const ${topicVarName} = {\n`;
  for (const key in topicObj) {
    if (key === 'topicData') {
      topicWrapper += `  topicData: [\n    ${itemNames.join(",\n    ")}\n  ],\n`;
    } else {
      topicWrapper += `  ${key}: ${jsStringify(topicObj[key], "  ")},\n`;
    }
  }
  topicWrapper += `};\n`;
  
  saveFile(path.join(classPath, `${topicFolderName}.js`), topicWrapper);
  
  return {
    importStatement: `import { ${topicVarName} } from "./${path.basename(classPath)}/${topicFolderName}.js";`,
    varName: topicVarName
  };
}

function processClass(classObj, outputDir) {
  const classId = classObj.class;
  const classFolderName = `class-${classId}`;
  const classPath = path.join(outputDir, classFolderName);
  const classVarName = `class${classId}`;

  console.log(`\n📚 Procesando Clase ${classId}: ${classObj.title?.info?.[0]?.text || `Clase ${classId}`}`);
  ensureDirectory(classPath);

  const topicResults = [];

  if (classObj.classData) {
    for (const topic of classObj.classData) {
      const result = processTopic(topic, classPath);
      topicResults.push(result);
    }
  }

  // Generar class-X.js DENTRO de outputDir (no dentro de class-X/)
  let classWrapper = topicResults.map(t => t.importStatement).join('\n');
  classWrapper += `\n\nexport const ${classVarName} = {\n`;
  
  for (const key in classObj) {
    if (key === 'classData') {
      classWrapper += `  classData: [\n    ${topicResults.map(t => t.varName).join(',\n    ')}\n  ]\n`;
    } else {
      classWrapper += `  ${key}: ${jsStringify(classObj[key], "  ")},\n`;
    }
  }
  classWrapper += `};\n`;
  
  // El wrapper class-X.js va en outputDir, NO dentro de class-X/
  saveFile(path.join(outputDir, `${classFolderName}.js`), classWrapper);

  return {
    classNum: classId,
    className: classObj.title?.info?.[0]?.text || `Clase ${classId}`,
    classFolderName: classFolderName,
    classVarName: classVarName,
    topics: classObj.topics,
    classData: classObj.classData
  };
}

function processAllClasses(classes, outputDir) {
  const processedClasses = [];
  
  for (const classItem of classes) {
    const result = processClass(classItem, outputDir);
    processedClasses.push(result);
  }
  
  return processedClasses;
}

function generateMaster(outputDir, masterFilename, processedClasses) {
  console.log(`\n📦 Generando archivo maestro: ${masterFilename}`);
  
  let imports = [];
  let exports = [];
  
  for (const cls of processedClasses) {
    const varName = cls.classVarName;
    const folderName = cls.classFolderName;
    // El import apunta a outputDir/class-X.js
    imports.push(`import { ${varName} } from "./${path.basename(outputDir)}/${folderName}.js";`);
    exports.push(varName);
  }
  
  let masterContent = `${imports.join('\n')}\n\n`;
  masterContent += `// ============================================================\n`;
  masterContent += `// Archivo maestro - Generado automáticamente\n`;
  masterContent += `// ============================================================\n\n`;
  masterContent += `const classes = [\n  ${exports.join(',\n  ')}\n];\n\n`;
  masterContent += `export default classes;\n`;
  
  saveFile(masterFilename, masterContent, `   ✅ Creado ${masterFilename}`);
}

function showSummary(outputDir, masterFilename, processedClasses) {
  console.log('\n' + '='.repeat(60));
  console.log('✅ GENERACIÓN COMPLETA');
  console.log('='.repeat(60));
  console.log(`📁 Directorio de salida: ${outputDir}`);
  console.log(`📄 Archivo maestro: ${masterFilename}`);
  console.log(`📊 Clases procesadas: ${processedClasses.length}`);
  console.log('\n📂 Estructura generada:');
  console.log(`
${path.basename(masterFilename)}                    # Archivo maestro (fuera de la carpeta)
${path.basename(outputDir)}/                      # Carpeta contenedora
├── class-1.js                 # Wrapper de clase 1
├── class-1/                   # Carpeta de clase 1
│   ├── topic-1.js             # Wrapper de tema 1
│   ├── topic-1/               # Carpeta de tema 1
│   │   └── data.js            # Datos del tema 1 (items)
│   ├── topic-2.js
│   └── topic-2/
│       └── data.js
├── class-2.js
└── class-2/
    ├── topic-1.js
    └── topic-1/
        └── data.js
`);
  console.log('✨ Cómo importar:');
  console.log(`   import classes from "./${path.basename(masterFilename)}";`);
  console.log(`   // o importar una clase específica:`);
  console.log(`   import { class1 } from "./${path.basename(outputDir)}/class-1.js";`);
  console.log(`   // o importar un tema específico:`);
  console.log(`   import { topic1 } from "./${path.basename(outputDir)}/class-1/topic-1.js";`);
  console.log(`   // o importar un item específico:`);
  console.log(`   import { item1 } from "./${path.basename(outputDir)}/class-1/topic-1/data.js";`);
}

// ============================================================
// MAIN
// ============================================================

export async function main(inputFile, outputDir, masterFilename) {
  console.log(`\n🚀 Iniciando generación de módulos desde ${inputFile}`);
  
  try {
    const classes = await loadOriginalData(inputFile);
    prepareOutputDir(outputDir);
    const processedClasses = processAllClasses(classes, outputDir);
    generateMaster(outputDir, masterFilename, processedClasses);
    showSummary(outputDir, masterFilename, processedClasses);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}