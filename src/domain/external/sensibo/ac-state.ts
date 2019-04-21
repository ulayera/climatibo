export class AcState {
    private _fanLevel: string;
    private _mode: string;
    private _on: Boolean;
    private _swing: string;
    private _targetTemperature: Number;
    private _temperatureUnit: string;

    get fanLevel(): string {
        return this._fanLevel;
    }

    set fanLevel(value: string) {
        this._fanLevel = value;
    }

    get mode(): string {
        return this._mode;
    }

    set mode(value: string) {
        this._mode = value;
    }

    get on(): Boolean {
        return this._on;
    }

    set on(value: Boolean) {
        this._on = value;
    }

    get swing(): string {
        return this._swing;
    }

    set swing(value: string) {
        this._swing = value;
    }

    get targetTemperature(): Number {
        return this._targetTemperature;
    }

    set targetTemperature(value: Number) {
        this._targetTemperature = value;
    }

    get temperatureUnit(): string {
        return this._temperatureUnit;
    }

    set temperatureUnit(value: string) {
        this._temperatureUnit = value;
    }
}