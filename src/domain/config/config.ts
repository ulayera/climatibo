import { ConfigMySqlConnection } from "./config-mysql-connection";

export class Config {
    sensiboApiKey: string;
    overlandApiKey: string;
    accuWeatherApiKey: string;
    mysql: ConfigMySqlConnection;
}