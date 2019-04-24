import { ConfigMySqlConnection } from "../../domain/config/config-mysql-connection";
import { Config } from "../../domain/config/config";

export const config: Config = {
    'sensiboApiKey': process.env.SENSIBO_API_KEY,
    'overlandApiKey': process.env.OVERLAND_API_KEY,
    'accuWeatherApiKey': process.env.ACCUWEATHER_API_KEY,
    'mysql': new ConfigMySqlConnection('localhost', 'root', '123456', 3306, 'climatibo'),
};