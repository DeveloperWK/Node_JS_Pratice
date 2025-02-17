const fs = require("fs");

const binaryFilePath = "imgStream.txt";
const outputImagePath = "restore.jpg";

const readStream = fs.createReadStream(binaryFilePath, { encoding: "utf-8" });
const writeStream = fs.createWriteStream(outputImagePath);

let bufferChunk = [];

// readStream.pipe(writeStream);

readStream.on("data", (chunk) => {
  let binaryStr = chunk.toString();
  while (binaryStr.length % 8 != 0) {
    binaryStr = binaryStr.slice(0, -1);
  }
  for (let i = 0; i < binaryStr.length; i += 8) {
    const byte = binaryStr.slice(i, i + 8);
    bufferChunk.push(parseInt(byte, 2));
  }
  const buffer = Buffer.from(bufferChunk);
  writeStream.write(buffer);
  bufferChunk = [];
});
readStream.on("end", () => {
  console.log("Finished reading the image");
  writeStream.end();
});

readStream.on("error", (err) => {
  console.error("Error reading the image:", err);
});
writeStream.on("error", (err) => {
  console.error("Error writing the image:", err);
});
