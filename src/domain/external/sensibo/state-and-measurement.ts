import { Measurement } from "./measurement";
import { State } from "./state";

export class StateAndMeasurement {
    private _state: State;
    private _measurement: Measurement;

    constructor(state: State, measurement: Measurement) {
        this._state = state;
        this._measurement = measurement;
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