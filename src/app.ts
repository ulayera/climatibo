import express from 'express';
import * as LocationService from "./services/location/location-service";
import * as AcActionsService from "./services/logic/ac-actions-service";
import * as WeatherActionsService from "./services/logic/weather-actions-service";
import CronJob from "node-cron";

const app: express.Application = express();
const port = 3000;
const AC_ACTIONS_SCHEDULE = "0 */5 * * * *";
const WEATHER_ACTIONS_SCHEDULE = "0 0 */1 * * *";

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

app.listen(port, () => {
    /**
     * Load AC, wheather and geolocation schedules.
     */
    CronJob.schedule(AC_ACTIONS_SCHEDULE, AcActionsService.executeAcJob);
    CronJob.schedule(WEATHER_ACTIONS_SCHEDULE, WeatherActionsService.executeWeatherJob);

    console.log(`Example app listening on port ${port}!`);
});