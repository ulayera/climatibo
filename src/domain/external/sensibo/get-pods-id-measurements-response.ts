import { Measurement } from "./measurement";

export class GetPodsIdMeasurementResponse {
    private _status: String;
    private _result: Array<Measurement>;


    get status(): String {
        return this._status;
    }

    set status(value: String) {
        this._status = value;
    }

    get result(): Array<Measurement> {
        return this._result;
    }

    set result(value: Array<Measurement>) {
        this._result = value;
    }
}