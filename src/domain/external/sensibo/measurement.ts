import { MeasurementTime } from "./measurement-time";

export class Measurement {
    private _humidity: Number;
    private _temperature: Number;
    private _time: MeasurementTime;

    get humidity(): Number {
        return this._humidity;
    }

    set humidity(value: Number) {
        this._humidity = value;
    }

    get temperature(): Number {
        return this._temperature;
    }

    set temperature(value: Number) {
        this._temperature = value;
    }

    get time(): MeasurementTime {
        return this._time;
    }

    set time(value: MeasurementTime) {
        this._time = value;
    }
}