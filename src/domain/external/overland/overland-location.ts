import { OverlandGeometry } from "./overland-geometry";
import { OverlandProperties } from "./overland-properties";

export class OverlandLocation {
    private _type: string;
    private _geometry: OverlandGeometry;
    private _properties: OverlandProperties;

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get geometry(): OverlandGeometry {
        return this._geometry;
    }

    set geometry(value: OverlandGeometry) {
        this._geometry = value;
    }

    get properties(): OverlandProperties {
        return this._properties;
    }

    set properties(value: OverlandProperties) {
        this._properties = value;
    }
}