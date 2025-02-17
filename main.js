// import fs from "fs";

fs.readFile("test.txt", "utf-8", (err, data) => {
  try {
    console.log(data);
    fs.writeFile("test2.txt", data, (err) => {
      if (err) {
        console.error(err);
      }
    });
    fs.writeFile("test3.txt", data, (err) => {
      if (err) {
        console.error(err);
      }
    });
  } catch (err) {
    console.error(err);
  }
});

// import { open } from "node:fs/promises";

// const file = await open("test.txt");

// for await (const line of file.readLines()) {
//   console.log(line);
// }

// import { open } from "node:fs/promises";

// const fd = await open("test.txt", "r");
// // Create a stream from some character device.
// const stream = fd.createReadStream();
// setTimeout(() => {
//   stream.close(); // This may not close the stream.
//   // Artificially marking end-of-stream, as if the underlying resource had
//   // indicated end-of-file by itself, allows the stream to close.
//   // This does not cancel pending read operations, and if there is such an
//   // operation, the process may still not be able to exit successfully
//   // until it finishes.
//   stream.push(null);
//   stream.read(0);
// }, 100);
// console.log(stream);

// // const fd = await open("test.txt", "r");
// // let check = fd.createReadStream({ start: 90, end: 99 });

// console.log(check);

// const foo = function bar() {
//   let a = 5
//   let b = 6
//   console.log(a*b);

// };

// console.log(foo(5));

// let x = 0;
// // "x < 10" is the loop condition
// while (x < 10) {
//   console.log("wasi");

//   x++;
// }

// function loop(x) {
//   // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//   if (x >= 10) {
//     return;
//   }

//   console.log("hello");

//   loop(x + 1); // the recursive call
// }
// function foo(i) {
//   if (i < 0) {
//     return;
//   }
//   console.log(`begin: ${i}`);
//   foo(i - 1);
//   console.log(`end: ${i}`);
// }
// foo(3);

const fs = require("fs");
const CHUNK_SIZE = 2 * 1024 * 1024;
const createReadStream = fs.createReadStream("portfolioIdeaDeepSeek.pdf", {
  highWaterMark: CHUNK_SIZE,
});
createReadStream.on("data", (chunk) => {
  console.log("Received Chunk of size", chunk.length, "bytes");
});
createReadStream.on("end", () => {
  console.log("Finished reading the file");
});
