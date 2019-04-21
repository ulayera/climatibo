import request from "request-promise-native";

export function getSantiagoWeather(apiKey: string) {
    let options = {
        method: 'GET',
        url: 'http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/60449',
        qs: {
            apikey: apiKey,
            metric: 'true'
        },
        headers:
            {
                'cache-control': 'no-cache'
            }
    };
    return request(options)
        .then(function (body) {
            return JSON.parse(body);
        })
        .catch(function (err) {
            throw new Error(err);
        });
}