import request = require("request-promise-native");

export function getpodsIdMeasurements(apiKey: String, podUid: String) {
    const options: request.Options = {
        method: 'GET',
        url: `https://home.sensibo.com/api/v2/pods/${podUid}/measurements`,
        qs: { apiKey },
        headers:
            {
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });
}
