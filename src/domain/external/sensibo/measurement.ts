import { MeasurementTime } from "./measurement-time";

export class Measurement {
    private _humidity: String;
    private _temperature: String;
    private _time: MeasurementTime;

    get humidity(): String {
        return this._humidity;
    }

    set humidity(value: String) {
        this._humidity = value;
    }

    get temperature(): String {
        return this._temperature;
    }

    set temperature(value: String) {
        this._temperature = value;
    }

    get time(): MeasurementTime {
        return this._time;
    }

    set time(value: MeasurementTime) {
        this._time = value;
    }
}