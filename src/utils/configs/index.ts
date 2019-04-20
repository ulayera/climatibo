import _ = require("lodash");

const defaults = require("./default.js").config;
const envConfig = require("./" + (process.env.NODE_ENV || "development") + ".js").config;
const config = _.merge({}, defaults, envConfig);
export default config;