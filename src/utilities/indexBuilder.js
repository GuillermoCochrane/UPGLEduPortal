/**
 * Reconstruye el índice del curso a partir de las clases modulares
 * @param {Array} classesList - El array de clases importado (ej. clases de Python)
 * @param {string} courseName - Nombre del curso para los links (ej. "Python", "Frontend")
 */
export function buildCourseIndex(classesList, courseName) {
  return classesList.map((cls) => ({
    summary: cls.summary || cls.title?.info?.[0]?.text || "",
    classId: cls.class,
    available: cls.available !== undefined ? cls.available : true,
    links: cls.classData.map((topic) => ({
      title: topic.title || "",
      topicId: topic.topic,
      // Construimos el link dinámicamente y evitamos redundancia
      link: `/courses/${courseName}/class/${cls.class}/${topic.topic}`
    }))
  }));
}