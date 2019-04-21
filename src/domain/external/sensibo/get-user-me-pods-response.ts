import { Pod } from "./pod";

export class GetUsersMePodsResponse {
    private _status: string;
    private _result: Array<Pod>;


    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get result(): Array<Pod> {
        return this._result;
    }

    set result(value: Array<Pod>) {
        this._result = value;
    }
}