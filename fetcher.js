const request = require('request');
const fs = require('fs');
const argv = process.argv.slice(2);
const myURL = argv[0];
const myPath = argv[1];

request(myURL, (error, response, body) => {
  if (error === null && response.statusCode === 200) {
    fs.writeFile(myPath, body, err => {
      if (err) {
        console.error(err)
        return
      }
      fs.stat(myPath, (err, fileStats) => {
        if (err) {
          console.log(err)
        } else {
          // console.log(fileStats)
          console.log(`Downloaded and saved ${fileStats.size} bytes to ./index.html.`)
        }
      });
    });
  }

});

