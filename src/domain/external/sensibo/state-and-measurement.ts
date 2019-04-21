import { Measurement } from "./measurement";
import { State } from "./state";
import { Pod } from "./pod";

export class StateAndMeasurement {
    private _pod: Pod;
    private _state: State;
    private _measurement: Measurement;

    constructor(pod: Pod, state: State, measurement: Measurement) {
        this._pod = pod;
        this._state = state;
        this._measurement = measurement;
    }

    get pod(): Pod {
        return this._pod;
    }

    set pod(value: Pod) {
        this._pod = value;
    }

    get state(): State {
        return this._state;
    }

    set state(value: State) {
        this._state = value;
    }

    get measurement(): Measurement {
        return this._measurement;
    }

    set measurement(value: Measurement) {
        this._measurement = value;
    }
}