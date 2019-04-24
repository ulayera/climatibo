import * as _ from "lodash";
import { Config } from "../../domain/config/config";

const defaults = require("./default.js").config;
const envConfig = require("./" + (process.env.NODE_ENV || "local") + ".js").config;
const config: Config = _.merge({}, defaults, envConfig);
export default config;