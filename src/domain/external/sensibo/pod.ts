export class Pod {
    private _id: string;
    private _name: string;

    constructor(id: string) {
        switch (id) {
            case "gq3xC5ir": this._name = 'Comedor'; break;
            case "NC3kMhRM": this._name = 'Dormitorio'; break;
            case "xd7qiJUv": this._name = 'Living'; break;
            default: this._name = '';
        }
        this._id = id;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}