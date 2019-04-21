import { AcState } from "./ac-state";

export class State {
    private _acState: AcState;
    private _changedProperties: Array<string>;
    private _failureReason: string;
    private _id: string;
    private _reason: string;
    private _status: string;

    get acState(): AcState {
        return this._acState;
    }

    set acState(value: AcState) {
        this._acState = value;
    }

    get changedProperties(): Array<string> {
        return this._changedProperties;
    }

    set changedProperties(value: Array<string>) {
        this._changedProperties = value;
    }

    get failureReason(): string {
        return this._failureReason;
    }

    set failureReason(value: string) {
        this._failureReason = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get reason(): string {
        return this._reason;
    }

    set reason(value: string) {
        this._reason = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}