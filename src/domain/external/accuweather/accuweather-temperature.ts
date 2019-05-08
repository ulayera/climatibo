export interface IAccuweatherTemperature {
    Value?: number;
    Unit?: string;
    UnitType?: number;
}

export class AccuweatherTemperature {

    constructor(Value: number, Unit: string, UnitType: number) {
        this.Value = Value;
        this.Unit = Unit;
        this.UnitType = UnitType;
    }

    get Value(): number {
        return this.Value;
    }

    set Value(value: number) {
        this.Value = value;
    }

    get Unit(): string {
        return this.Unit;
    }

    set Unit(value: string) {
        this.Unit = value;
    }

    get UnitType(): number {
        return this.UnitType;
    }

    set UnitType(value: number) {
        this.UnitType = value;
    }
}