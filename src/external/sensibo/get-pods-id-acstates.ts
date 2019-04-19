import request = require("request-promise-native");

export function getPodsIdAcstates(apiKey: String, podUid: String) {
    let options: request.Options = {
        method: 'GET',
        url: `https://home.sensibo.com/api/v2/pods/${podUid}/acStates`,
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