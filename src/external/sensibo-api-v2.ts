import request = require("request-promise-native");
import { State } from "../domain/external/sensibo/state";

export function getPodsId(apiKey: String, podUid: String) {
    let options: request.Options = {
        method: 'GET',
        url: `https://home.sensibo.com/api/v2/pods/${podUid}`,
        qs: { apiKey },
        headers:
            {
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                Accept: 'application/json'
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
    return request(options)
        .then(function (body) {
            return JSON.parse(body);
        })
        .catch(function (err) {
            throw new Error(err);
        });
}

export function getPodsIdAcstatesProperty(apiKey: String, podUid: String, property: String) {
    let options: request.Options = {
        method: 'GET',
        url: 'https://home.sensibo.com/api/v2/pods/${podUid}/acStates/${property}',
        qs: { apiKey },
        headers:
            {
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                Accept: 'application/json'
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

export function getPodsIdMeasurements(apiKey: String, podUid: String) {
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
    return request(options)
        .then(function (body) {
            return JSON.parse(body);
        })
        .catch(function (err) {
            throw new Error(err);
        });
}

export function getUsersMePods(apiKey: String) {
    const options: request.Options = {
        method: 'GET',
        url: 'https://home.sensibo.com/api/v2/users/me/pods',
        qs: { apiKey },
        headers:
            {
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                Accept: 'application/json'
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
    return request(options)
        .then(function (body) {
            return JSON.parse(body);
        })
        .catch(function (err) {
            throw new Error(err);
        });
}

export function postPodsIdAcstates(apiKey: String, podUid: String, state: State) {
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
        body: JSON.stringify(state)
    };
    return request(options)
        .then(function (body) {
            return JSON.parse(body);
        })
        .catch(function (err) {
            throw new Error(err);
        });
}