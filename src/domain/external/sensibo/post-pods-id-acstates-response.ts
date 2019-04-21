import { State } from "./state";

export class PostPodsIdAcStatesResponse {
    private _moreResults: Boolean;
    private _status: string;
    private _result: State;

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get result(): State {
        return this._result;
    }

    set result(value: State) {
        this._result = value;
    }

    get moreResults(): Boolean {
        return this._moreResults;
    }

    set moreResults(value: Boolean) {
        this._moreResults = value;
    }
}