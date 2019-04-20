export class ConfigMySqlConnection {
    private _hostname: String;
    private _username: String;
    private _password: String;
    private _port: Number;
    private _databaseName: String;

    constructor(hostname: String, username: String, password: String, port: Number, databaseName: String) {
        this._hostname = hostname;
        this._username = username;
        this._password = password;
        this._port = port;
        this._databaseName = databaseName;
    }

    get username(): String {
        return this._username;
    }

    set username(value: String) {
        this._username = value;
    }

    get hostname(): String {
        return this._hostname;
    }

    set hostname(value: String) {
        this._hostname = value;
    }

    get password(): String {
        return this._password;
    }

    set password(value: String) {
        this._password = value;
    }

    get port(): Number {
        return this._port;
    }

    set port(value: Number) {
        this._port = value;
    }

    get databaseName(): String {
        return this._databaseName;
    }

    set databaseName(value: String) {
        this._databaseName = value;
    }
}