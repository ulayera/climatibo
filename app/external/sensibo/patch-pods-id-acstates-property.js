const request = require("request");

module.exports = function(apiKey, podUid, property, value) {
  const options = { method: 'PATCH',
    url: `https://home.sensibo.com/api/v2/pods/${podUid}/acStates/${property}`,
    qs: { apiKey },
    headers:
      { 'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        Accept: 'application/json' },
    body: value };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
};