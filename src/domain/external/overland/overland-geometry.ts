export class OverlandGeometry {
    private _coordinates: Array<Number>;

    get coordinates(): Array<Number> {
        return this._coordinates;
    }

    set coordinates(value: Array<Number>) {
        this._coordinates = value;
    }
}