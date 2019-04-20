import { AcState } from "./ac-state";

export class State {
    private _acState: AcState;
    private _changedProperties: Array<String>;
    private _failureReason: String;
    private _id: String;
    private _reason: String;
    private _status: String;

    get acState(): AcState {
        return this._acState;
    }

    set acState(value: AcState) {
        this._acState = value;
    }

    get changedProperties(): Array<String> {
        return this._changedProperties;
    }

    set changedProperties(value: Array<String>) {
        this._changedProperties = value;
    }

    get failureReason(): String {
        return this._failureReason;
    }

    set failureReason(value: String) {
        this._failureReason = value;
    }

    get id(): String {
        return this._id;
    }

    set id(value: String) {
        this._id = value;
    }

    get reason(): String {
        return this._reason;
    }

    set reason(value: String) {
        this._reason = value;
    }

    get status(): String {
        return this._status;
    }

    set status(value: String) {
        this._status = value;
    }
}