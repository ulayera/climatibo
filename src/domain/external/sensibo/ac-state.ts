export class AcState {
    private _fanLevel: String;
    private _mode: Array<String>;
    private _on: Boolean;
    private _swing: String;
    private _targetTemperature: Number;
    private _temperatureUnit: String;

    get fanLevel(): String {
        return this._fanLevel;
    }

    set fanLevel(value: String) {
        this._fanLevel = value;
    }

    get mode(): Array<String> {
        return this._mode;
    }

    set mode(value: Array<String>) {
        this._mode = value;
    }

    get on(): Boolean {
        return this._on;
    }

    set on(value: Boolean) {
        this._on = value;
    }

    get swing(): String {
        return this._swing;
    }

    set swing(value: String) {
        this._swing = value;
    }

    get targetTemperature(): Number {
        return this._targetTemperature;
    }

    set targetTemperature(value: Number) {
        this._targetTemperature = value;
    }

    get temperatureUnit(): String {
        return this._temperatureUnit;
    }

    set temperatureUnit(value: String) {
        this._temperatureUnit = value;
    }
}