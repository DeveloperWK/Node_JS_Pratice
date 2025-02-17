const fs = require("fs");
function bufferToBinary(buffer) {
  let binary = "";
  for (let i = 0; i < buffer.length; i++) {
    binary += buffer[i].toString(2).padStart(8, "0");
  }
  return binary;
}

fs.readFile("hello.jpg", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  const binaryData = bufferToBinary(data);
  fs.writeFile("imageBinary.txt", binaryData, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    }
    console.log("Image binary data saved successfully!");
  });
});
