export class OverlandProperties {
    private _motion: Array<string>;
    private _speed: Number;
    private _battery_level: Number;
    private _device_id: string;
    private _altitude: Number;
    private _battery_state: string;
    private _horizontal_accuracy: Number;
    private _vertical_accuracy: Number;
    private _timestamp: string;
    private _wifi: string;

    get motion(): Array<string> {
        return this._motion;
    }

    set motion(value: Array<string>) {
        this._motion = value;
    }

    get speed(): Number {
        return this._speed;
    }

    set speed(value: Number) {
        this._speed = value;
    }

    get battery_level(): Number {
        return this._battery_level;
    }

    set battery_level(value: Number) {
        this._battery_level = value;
    }

    get device_id(): string {
        return this._device_id;
    }

    set device_id(value: string) {
        this._device_id = value;
    }

    get altitude(): Number {
        return this._altitude;
    }

    set altitude(value: Number) {
        this._altitude = value;
    }

    get battery_state(): string {
        return this._battery_state;
    }

    set battery_state(value: string) {
        this._battery_state = value;
    }

    get horizontal_accuracy(): Number {
        return this._horizontal_accuracy;
    }

    set horizontal_accuracy(value: Number) {
        this._horizontal_accuracy = value;
    }

    get vertical_accuracy(): Number {
        return this._vertical_accuracy;
    }

    set vertical_accuracy(value: Number) {
        this._vertical_accuracy = value;
    }

    get timestamp(): string {
        return this._timestamp;
    }

    set timestamp(value: string) {
        this._timestamp = value;
    }

    get wifi(): string {
        return this._wifi;
    }

    set wifi(value: string) {
        this._wifi = value;
    }
}