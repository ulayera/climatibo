import { Database } from "../../utils/storage/level-db";
import { IAccuweatherForecast } from "../../domain/external/accuweather/accuweather-forecast";
import * as WeatherService from "../weather/weather-service";


export function executeWeatherJob() {
    WeatherService.getWeather().then((weather: IAccuweatherForecast) => {
        Database.get('forecasts')
            .then((result: Array<IAccuweatherForecast>) => {
                Database.put('forecasts', result.slice(-24).concat(weather));
            })
            .catch((error: any) => {
                Database.put('forecasts', [].concat(weather));
            });
    });
}