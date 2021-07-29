const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        // console.log("Request Failed");
        callback(error, null);
      } else {
        const data = JSON.parse(body);
        if (data[0] === undefined) {
          let error = "Error => breed name not found";
          callback(error, null);
        } else {
          // const data = JSON.parse(body);
          callback(null, data[0].description);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };
