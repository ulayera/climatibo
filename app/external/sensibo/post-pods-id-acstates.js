const request = require("request");

module.exports = function (apiKey, podUid) {
  const options = { method: 'POST',
    url: `https://home.sensibo.com/api/v2/pods/${podUid}/acStates`,
    qs: { apiKey },
    headers:
      { 'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        Accept: 'application/json' },
    body: 'The required AC state' };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
};