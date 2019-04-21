export class ConfigMySqlConnection {
    private _hostname: string;
    private _username: string;
    private _password: string;
    private _port: Number;
    private _databaseName: string;

    constructor(hostname: string, username: string, password: string, port: Number, databaseName: string) {
        this._hostname = hostname;
        this._username = username;
        this._password = password;
        this._port = port;
        this._databaseName = databaseName;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get hostname(): string {
        return this._hostname;
    }

    set hostname(value: string) {
        this._hostname = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get port(): Number {
        return this._port;
    }

    set port(value: Number) {
        this._port = value;
    }

    get databaseName(): string {
        return this._databaseName;
    }

    set databaseName(value: string) {
        this._databaseName = value;
    }
}