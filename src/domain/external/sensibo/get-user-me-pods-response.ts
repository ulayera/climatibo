import { Pod } from "./pod";

export class GetUsersMePodsResponse {
    private _status: String;
    private _result: Array<Pod>;


    get status(): String {
        return this._status;
    }

    set status(value: String) {
        this._status = value;
    }

    get result(): Array<Pod> {
        return this._result;
    }

    set result(value: Array<Pod>) {
        this._result = value;
    }
}