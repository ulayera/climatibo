import request from "request-promise-native";
import { AcState } from "../domain/external/sensibo/ac-state";
import { PostPodsIdAcStatesResponse } from "../domain/external/sensibo/post-pods-id-acstates-response";

export function getPodsId(apiKey: string, podUid: string) {
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

export function getPodsIdAcstates(apiKey: string, podUid: string) {
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

export function getPodsIdAcstatesProperty(apiKey: string, podUid: string, property: string) {
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

export function getPodsIdMeasurements(apiKey: string, podUid: string) {
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

export function getUsersMePods(apiKey: string) {
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

export function patchPodsIdAcstatesProperty(apiKey: string, podUid: string, property: string, value: string) {
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

export function postPodsIdAcstates(apiKey: string, podUid: string, acState: AcState) {
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
        body: JSON.stringify({ acState })
    };
    let responseDummy = new PostPodsIdAcStatesResponse();
    responseDummy.status = "Success";
    return Promise.resolve(responseDummy)/*request(options)
        .then(function (body) {
            return JSON.parse(body);
        })
        .catch(function (err) {
            console.log(options);
            throw new Error(err);
        })*/;
}