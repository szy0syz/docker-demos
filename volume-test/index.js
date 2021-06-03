const fs = require("fs");

// const content = 'Some content!'

// try {
//   fs.writeFileSync(`/usr/data/${Date.now()}-BB.txt`, content)
// } catch (err) {
//   console.error(err)
// }

// ---- CC ----
fs.appendFile(
  "/usr/data/CC.txt",
  `${new Date().toLocaleString()}\n`,
  function (err) {
    if (err) {
      console.log("append CC.txt success", err);
    } else {
      // done
      console.log("append CC.txt fail");
    }
  }
);
