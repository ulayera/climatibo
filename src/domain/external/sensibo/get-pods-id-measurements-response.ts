import { Measurement } from "./measurement";

export class GetPodsIdMeasurementResponse {
    private _status: string;
    private _result: Array<Measurement>;


    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get result(): Array<Measurement> {
        return this._result;
    }

    set result(value: Array<Measurement>) {
        this._result = value;
    }
}