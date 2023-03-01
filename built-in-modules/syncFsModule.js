const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync('./text/first.txt', 'utf8')
const second = readFileSync('./text/second.txt', 'utf8')

// console.log(first, second);

writeFileSync("./text/result.txt", `here is the result: ${first}, ${second}`, {flag: "a"})
writeFileSync("./text/result.js", `const result = "pass"`)