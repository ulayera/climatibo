import config from "../../utils/configs";
import { Request } from "express";
import * as accuwhatherApiV1 from "../../external/accuweather-api-v1";
import { AccuweatherForecast } from "../../domain/external/accuweather/accuweather-forecast";

export function getWeather() {
    return accuwhatherApiV1.getSantiagoWeather(config.accuWeatherApiKey)
        .then((response: Array<AccuweatherForecast>) => {
            if (response && response.length === 1 && response[0].hasOwnProperty("Temperature")) {
                return response[0];
            } else {
                throw new Error('WeatherService.getWeather failed: ' + JSON.stringify(response, null, 2));
            }
        });
}