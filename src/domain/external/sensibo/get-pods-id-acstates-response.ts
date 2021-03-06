import { State } from "./state";

export class GetPodsIdAcStatesResponse {
    private _moreResults: Boolean;
    private _status: string;
    private _result: Array<State>;

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get result(): Array<State> {
        return this._result;
    }

    set result(value: Array<State>) {
        this._result = value;
    }

    get moreResults(): Boolean {
        return this._moreResults;
    }

    set moreResults(value: Boolean) {
        this._moreResults = value;
    }
}