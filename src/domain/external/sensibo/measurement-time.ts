export class MeasurementTime {
    private _secondsAgo: Number;
    private _time: string;

    get secondsAgo(): Number {
        return this._secondsAgo;
    }

    set secondsAgo(value: Number) {
        this._secondsAgo = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }
}