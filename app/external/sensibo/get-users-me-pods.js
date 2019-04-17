const request = require("request");

module.exports = function (apiKey) {
  const options = { method: 'GET',
    url: 'https://home.sensibo.com/api/v2/users/me/pods',
    qs: { apiKey },
    headers:
      { 'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        Accept: 'application/json' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
};