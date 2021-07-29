const request = require("request");
const args = process.argv.slice(2);
// console.log(typeof args);
let query = args[0];
// console.log(query);
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
  (error, response, body) => {
    console.log(typeof body);
    //console.log("body: ", body);
    if (error) {
      return error + response.statusCode;
    }
    const data = JSON.parse(body);
    console.log("breed name: ", data[0].name);
    console.log("description: ", data[0].description);
  }
);
