export class MeasurementTime {
    private _secondsAgo: Number;
    private _time: String;

    get secondsAgo(): Number {
        return this._secondsAgo;
    }

    set secondsAgo(value: Number) {
        this._secondsAgo = value;
    }

    get time(): String {
        return this._time;
    }

    set time(value: String) {
        this._time = value;
    }
}