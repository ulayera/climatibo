import * as sensiboApiV2 from '../../external/sensibo-api-v2';
import { GetUsersMePodsResponse } from "../../domain/external/sensibo/get-user-me-pods-response";
import { GetPodsIdAcStatesResponse } from "../../domain/external/sensibo/get-pods-id-acstates-response";
import { GetPodsIdMeasurementResponse } from "../../domain/external/sensibo/get-pods-id-measurements-response";
import { Pod } from "../../domain/external/sensibo/pod";
import { AcState } from "../../domain/external/sensibo/ac-state";
import { PostPodsIdAcStatesResponse } from "../../domain/external/sensibo/post-pods-id-acstates-response";
import config from '../../utils/configs';

export function getPods(): Promise<Array<string>> {
    return sensiboApiV2.getUsersMePods(config.sensiboApiKey)
        .then((response: GetUsersMePodsResponse) => {
            if (response && response.status.toLowerCase() === 'success') {
                return response.result.map((o: Pod) => o.id);
            } else {
                throw new Error('SensiboService.getPods failed: ' + JSON.stringify(response, null, 2));
            }
        });
}

export function getState(id: string) {
    return sensiboApiV2.getPodsIdAcstates(config.sensiboApiKey, id)
        .then((response: GetPodsIdAcStatesResponse) => {
            if (response && response.status.toLowerCase() === 'success') {
                return response.result[0];
            } else {
                throw new Error('SensiboService.getState failed: ' + JSON.stringify(response, null, 2));
            }
        });
}


export function setState(id: string, acState: AcState) {
    return sensiboApiV2.postPodsIdAcstates(config.sensiboApiKey, id, acState)
        .then((response: PostPodsIdAcStatesResponse) => {
            if (response && response.status.toLowerCase() === 'success') {
                return response.result;
            } else {
                throw new Error('SensiboService.setState failed: ' + JSON.stringify(response, null, 2));
            }
        });
}

export function getMeasurement(id: string) {
    return sensiboApiV2.getPodsIdMeasurements(config.sensiboApiKey, id)
        .then((response: GetPodsIdMeasurementResponse) => {
            if (response && response.status.toLowerCase() === 'success') {
                return response.result[0];
            } else {
                throw new Error('SensiboService.getState failed: ' + JSON.stringify(response, null, 2));
            }
        });
}