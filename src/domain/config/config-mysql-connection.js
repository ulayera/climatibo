var ConfigMySqlConnection = /** @class */ (function () {
  function ConfigMySqlConnection() {
  }

  Object.defineProperty(ConfigMySqlConnection.prototype, "username", {
    get: function () {
      return this._username;
    },
    set: function (value) {
      this._username = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConfigMySqlConnection.prototype, "hostname", {
    get: function () {
      return this._hostname;
    },
    set: function (value) {
      this._hostname = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConfigMySqlConnection.prototype, "password", {
    get: function () {
      return this._password;
    },
    set: function (value) {
      this._password = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConfigMySqlConnection.prototype, "port", {
    get: function () {
      return this._port;
    },
    set: function (value) {
      this._port = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConfigMySqlConnection.prototype, "databaseName", {
    get: function () {
      return this._databaseName;
    },
    set: function (value) {
      this._databaseName = value;
    },
    enumerable: true,
    configurable: true
  });
  return ConfigMySqlConnection;
}());
