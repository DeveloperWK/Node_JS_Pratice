// const fs = require("fs");
// const events = require("events");

// const rs = fs.createReadStream("./test.txt", "utf8");

// rs.on("open", () => {
//   //   console.log("the file is opened");
// });

// let eventEmitter = new events.EventEmitter();
// let myEventHandler = () => {
//   console.log("event fired scream");
// };
// eventEmitter.on("scream", myEventHandler);
// eventEmitter.emit("scream");

// const buf = Buffer.from("hello world");
// const byteArray = new Uint8Array([
//   104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100,
// ]);

// const decoder = new TextEncoder();
// const result = decoder.encode(text);
// const binaryArray = Array.from(text, (char) => char.charCodeAt(0).toString(2));
// console.log(binaryArray);
// const binaryStr = binaryArray.join(" ");
// console.log(binaryStr);

// const binary = "1001001 100000 1101100 1101111 1110110 1100101 100000 1010101";
// const binaryArray2 = binary.split("").map((bin) => parseInt(bin, 2));
// const buffer = Buffer.from(binary, "binary");

// console.log(buffer);
// const text1 = buffer.toString("utf8");
// console.log(text1);
// const rawData = "                                 ";
// const buffer = Buffer.from(rawData, "binary");
// const bufferArray = Array.from(buffer);

// console.log(Array.from(rawData));
// const array = rawData.forEach((byte, index) => {
//   console.table(`Byte ${index}":`, byte.toString(2).padStart(8, "0"));
// });
// try {
//   const decodedText = buffer.toString("utf-8"); // In Node.js
//   console.log("decodedText", decodedText);
// } catch (error) {
//   console.error("Error decoding text:", error.message);
// }
// console.log(Array.from(buffer));
// const binaryString = bufferArray.join(" ");
// const binaryGroups = binaryString.match(/.{1,8}/g);
// const textFormat = binaryGroups
//   .map((group) => String.fromCharCode(parseInt(group, 2)))
//   .join("");
// console.log("Text format:", textFormat);
