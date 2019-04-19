import request = require("request-promise-native");

export function patchPodsIdAcstatesProperty(apiKey: String, podUid: String, property: String, value: String) {
    const options: request.Options = {
        method: 'PATCH',
        url: `https://home.sensibo.com/api/v2/pods/${podUid}/acStates/${property}`,
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
};