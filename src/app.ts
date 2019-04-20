import express = require('express');
import SensiboService = require('./services/sensibo/sensibo-service');
import { StateAndMeasurement } from "./domain/external/sensibo/state-and-measurement";

const app: express.Application = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(port, function () {
    SensiboService.getPods().then((pods) => {
        Promise.all(
            pods.map(async (id: String) => {
                return new StateAndMeasurement(await SensiboService.getState(id), await SensiboService.getMeasurement(id))
            })).then((allData: Array<StateAndMeasurement>) => {
            console.log(allData);
        });
    });
    console.log(`Example app listening on port ${port}!`);
});