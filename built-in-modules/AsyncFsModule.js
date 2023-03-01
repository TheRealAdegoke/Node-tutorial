const {readFile, writeFile} = require("fs")

readFile("./text/first.txt", "utf8" , (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile("./text/second.txt", "utf8", (err, result) => {
        if (err) {
        console.log(err)
        return
    }
    const second = result
    writeFile("./text/file.txt", `here is the result: ${first}, ${second}`, (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(result);
    })
    })
})