import express from 'express';
import * as LocationService from "./services/location/location-service";
import * as WeatherService from "./services/weather/weather-service";
import * as AcActionsService from "./services/logic/ac-actions-service";
import CronJob from "node-cron";
import { AccuweatherForecast } from "./domain/external/accuweather/accuweather-forecast";


const app: express.Application = express();
const port = 3000;

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/info', function (req, res) {
    LocationService.saveLocations(req);
    res.status(200).send({
        "result": "ok"
    });
});

app.listen(port, async function () {
    AcActionsService.executeAcJob();
    CronJob.schedule("0 */5 * * * *", function() {
        AcActionsService.executeAcJob();
    });
    CronJob.schedule("0 0 */1 * * *", async function() {
        let weather: AccuweatherForecast = await WeatherService.getWeather();
        console.log(weather);
    });
    console.log(`Example app listening on port ${port}!`);
});