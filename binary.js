const fs = require("fs");

fs.readFile("test.txt", "utf-8", (err, data) => {
  try {
    const binary = Array.from(data, (char) => char.charCodeAt(0).toString(2));
    fs.writeFile("binary.txt", binary.join(" "), (err) => {
      if (err) {
        console.error(err);
      }
    });
  } catch (error) {
    console.error(error);
  }
});

fs.readFile("binary.txt", "utf-8", (err, data) => {
  try {
    const binaryArr = data.split(" ");
    const textConvert = binaryArr
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
    fs.writeFile("convertBinary.txt", textConvert, (err) => {
      if (err) {
        console.error(err);
      }
      console.log("Finished converting binary to text");
    });
  } catch (error) {
    console.error(error);
  }
});
// const text = "I love U";
// const binaryArray = Array.from(text, (char) => char.charCodeAt(0).toString(2));
// const binaryStr = binaryArray.join(" ");
// const binaryArr = binaryStr.split(" ");
// const textConvert = binaryArr
//   .map((bin) => String.fromCharCode(parseInt(bin, 2)))
//   .join("");
// console.log(textConvert);
