import { ConfigMySqlConnection } from "../../domain/config/config-mysql-connection";
import { Config } from "../../domain/config/config";

export const config: Config = {
    'apiKey': process.env.SENSIBO_API_KEY,
    'mysql': new ConfigMySqlConnection('localhost', 'root', '123456', 3306, 'mydb'),
};