const fs = require('fs');
const os = require("os");
console.log("🚀 ~ os:", os.cpus().length)

// Sync...
// fs.writeFileSync('test.txt','Hey! Hello.');


// Async
// fs.writeFile('test.txt', 'Hey! There.', (err) => { });


// const res = fs.readFileSync('./contact.txt', "utf-8");
// console.log("🚀 ~ res:", res); 


// fs.readFile('./contact.txt', "utf-8", (err, result) => {
//     if (err) {
//         console.log("🚀 ~ res ~ err:", err)
//     } else {
//         console.log("🚀 ~ result:", result);
//     }
// });


// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);


// fs.cpSync("./test.txt","./copy.txt");


// fs.unlinkSync("./copy.txt");


// console.log(fs.statSync("./test.txt").isFile());
// console.log(fs.statSync("./test.txt").isDirectory());


fs.mkdirSync('my-docs/a/b', { recursive: true })
