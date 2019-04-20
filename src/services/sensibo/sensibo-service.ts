import config from '../../utils/configs/index';
import * as sensiboApiV2 from '../../external/sensibo-api-v2';
import { GetUsersMePodsResponse } from "../../domain/external/sensibo/get-user-me-pods-response";
import { GetPodsIdAcStatesResponse } from "../../domain/external/sensibo/get-pods-id-acstates-response";
import { State } from "../../domain/external/sensibo/state";
import { GetPodsIdMeasurementResponse } from "../../domain/external/sensibo/get-pods-id-measurements-response";
import { Pod } from "../../domain/external/sensibo/pod";

export function getPods(): Promise<Array<String>> {
    return sensiboApiV2.getUsersMePods(config.apiKey)
        .then((response: GetUsersMePodsResponse) => {
            if (response && response.status === 'success') {
                return response.result.map((o: Pod) => o.id);
            } else {
                throw new Error('SensiboService.getPods failed: ' + response);
            }
        });
}

export function getState(id: String) {
    return sensiboApiV2.getPodsIdAcstates(config.apiKey, id)
        .then((response: GetPodsIdAcStatesResponse) => {
            if (response && response.status === 'success') {
                return response.result[0];
            } else {
                throw new Error('SensiboService.getState failed: ' + response);
            }
        });
}


export function setState(id: String, state: State) {
    return sensiboApiV2.postPodsIdAcstates(config.apiKey, id, state)
        .then((response: GetPodsIdAcStatesResponse) => {
            if (response && response.status === 'success') {
                return response.result;
            } else {
                throw new Error('SensiboService.setState failed: ' + response);
            }
        });
}

export function getMeasurement(id: String) {
    return sensiboApiV2.getPodsIdMeasurements(config.apiKey, id)
        .then((response: GetPodsIdMeasurementResponse) => {
            if (response && response.status === 'success') {
                return response.result[0];
            } else {
                throw new Error('SensiboService.getState failed: ' + response);
            }
        });
}