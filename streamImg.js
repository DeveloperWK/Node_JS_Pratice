const fs = require("fs");
const imgPath = "./hello.jpg";

const outputStream = fs.createWriteStream("imgStream.txt");
const stream = fs.createReadStream(imgPath);
stream.on("data", (chunk) => {
  let binary = "";
  for (let i = 0; i < chunk.length; i++) {
    binary += chunk[i].toString(2).padStart(8, "0");
  }
  outputStream.write(binary);
});
stream.on("end", () => {
  console.log("Finished reading the image");
  outputStream.end();
});
stream.on("error", (err) => {
  console.error("Error reading the image:", err);
});
