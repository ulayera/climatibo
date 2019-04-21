import { OverlandLocation } from "../../domain/external/overland/overland-location";
import { Request } from "express";
import config from '../../utils/configs';

export function saveLocations(req: Request) {
    let locations: Array<OverlandLocation> = [];
    if (req.body && req.body.locations && req.body.locations instanceof Array) {
        locations = req.body.locations.filter((l: OverlandLocation) => l.properties.device_id === config.overlandApiKey)
    }
    console.log(`Received locations: \n ${locations.length}`);
}