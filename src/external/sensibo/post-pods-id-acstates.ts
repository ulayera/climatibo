import request = require("request-promise-native");

export function postPodsIdAcstates(apiKey: String, podUid: String, value: String) {
    const options: request.Options = {
        method: 'POST',
        url: `https://home.sensibo.com/api/v2/pods/${podUid}/acStates`,
        qs: { apiKey },
        headers:
            {
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
        body: value
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });
}