export class AccuweatherTemperature {
    private _Value: number;
    private _Unit: string;
    private _UnitType: number;

    constructor(Value: number, Unit: string, UnitType: number) {
        this._Value = Value;
        this._Unit = Unit;
        this._UnitType = UnitType;
    }

    get Value(): number {
        return this._Value;
    }

    set Value(value: number) {
        this._Value = value;
    }

    get Unit(): string {
        return this._Unit;
    }

    set Unit(value: string) {
        this._Unit = value;
    }

    get UnitType(): number {
        return this._UnitType;
    }

    set UnitType(value: number) {
        this._UnitType = value;
    }
}