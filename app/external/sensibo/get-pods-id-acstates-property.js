var request = require("request");

modules.exports = function (apiKey, podUid, property) {
  var options = { method: 'GET',
    url: 'https://home.sensibo.com/api/v2/pods/${podUid}/acStates/${property}',
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