import { AcState } from "../../domain/external/sensibo/ac-state";
import { StateAndMeasurement } from "../../domain/external/sensibo/state-and-measurement";
import { Pod } from "../../domain/external/sensibo/pod";
import * as SensiboService from "../sensibo/sensibo-service"

const tempSettings = {
    desiredTemp: 23,
    tempTolerance: 0.5,
};

function getAcStateDiff(origin: any, destination: any): Array<string> {
    let differences: Array<string> = [];
    for (let property in origin) {
        if (origin.hasOwnProperty(property)) {
            if (origin[property] !== destination.state.acState[property]) {
                differences.push(`Property '${property}' changed from` +
                    ` '${destination.state.acState[property]}' to '${origin[property]}'`)
            }
        }
    }
    return differences;
}

function turnOnAndHeat(acState: AcState) {
    acState.on = true;
    acState.mode = "heat";
    acState.swing = "stopped";
    acState.targetTemperature = tempSettings.desiredTemp;
}

function turnOnAndCool(acState: AcState) {
    acState.on = true;
    acState.mode = "cool";
    acState.swing = "stopped";
    acState.targetTemperature = tempSettings.desiredTemp;
}

function setSwingToStopped(acState: AcState) {
    acState.swing = "stopped";
}

function evaluateStateAndMeasurements(data: StateAndMeasurement) {
    /*
     * This code is really awful but i haven't come up with a useful design yet 🌈
     */
    const acState: AcState = JSON.parse(JSON.stringify(data.state.acState));

    if (data.measurement.temperature < tempSettings.desiredTemp - tempSettings.tempTolerance) {
        turnOnAndHeat(acState);
    } else if (data.measurement.temperature > tempSettings.desiredTemp + tempSettings.tempTolerance) {
        turnOnAndCool(acState);
    } else if (data.state.acState.swing !== 'stopped') {
        setSwingToStopped(acState);
    } else if (data.state.acState.on) {
        data.state.acState.on = false;
    }

    let diff = getAcStateDiff(acState, data);
    let result: AcState;
    if (diff.length > 0) {
        result = acState;
        console.log(`Pod ${data.pod.id} is getting these properties modified: ${JSON.stringify(diff)}`);
    }
    return result;
}

export function executeAcJob() {
    console.log(`Executing AC Job at ${new Date()}`);
    return SensiboService.getPods().then((pods) => {
        Promise.all(pods.map(async (id: string) => {
            return new StateAndMeasurement(new Pod(id), await SensiboService.getState(id), await SensiboService.getMeasurement(id))
        })).then((allData: Array<StateAndMeasurement>) => {
            allData.forEach(async (data: StateAndMeasurement) => {
                console.log(
                    `/* Pod ${data.pod.name} with id ${data.pod.id} is ${(data.state.acState.on) ? 'on' : 'off' }\n` +
                    ((data.state.acState.on) ? ` * Mode is set to ${data.state.acState.mode} at ${data.state.acState.targetTemperature}\n` : '') +
                    ` * Room is currently at ${data.measurement.temperature} degrees */`
                );
                let acState = evaluateStateAndMeasurements(data);
                if (acState) {
                    let result = await SensiboService.setState(data.pod.id, acState);
                    if (result && result.status === "Success") {
                        console.log(`Pod ${data.pod.id} AcState set successfully!`);
                    }
                }
            })
        });
    });
}
