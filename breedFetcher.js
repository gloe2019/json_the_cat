const request = require("request");
const args = process.argv.slice(2);
// console.log(typeof args);
let query = args[0];
// console.log(query);
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
  (error, response, body) => {
    // console.log("response: ", response.statusCode);
    // console.log("body: ", body);
    if (error) {
      console.log("❌Request Failed❌");
      console.log(error);
      return;
    }
    console.log("response: ", response.statusCode);
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("❌Error => breed name not found❌");
      return "Error - requested breed not found!";
    }
    console.log("breed name: ", data[0].name);
    console.log("description: ", data[0].description);
  }
);
