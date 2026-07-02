import { main } from "./moduleGenerator.js";

const inputFile = "../assets/data/FrontEnd.js"
const outputDir = "../assets/data/frontend";
const outpuFile = "../assets/data/frontend/FrontEnd.js"

// const inputFile = "../assets/data/BackEnd.js"
// const outputDir = "../assets/data/backend";
// const outpuFile = "../assets/data/backend/BackEnd.js"

// const inputFile = "../assets/data/IAChatGPT.js"
// const outputDir = "../assets/data/ia";
// const outpuFile = "../assets/data/ia/IAChatGPT.js"

// const inputFile = "../assets/data/Python.js"
// const outputDir = "../assets/data/python";
// const outpuFile = "../assets/data/python/Python.js"

main(inputFile, outputDir, outpuFile);