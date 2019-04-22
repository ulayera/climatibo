# climatibo
App for controlling several sensibo's in a more human way.

## Install instructions

1. Set `NODE_ENV` and `SENSIBO_API_KEY` env vars.
2. `npm run tsc`
3. `npm run start`

It will start reading your sensibo's sensors.

## Future features

Right now it does:

- Automatically adjust to 23ºC.
- Retrieves GPS data.
- Retrieves Weather data.

In the future it will:

- Save all data into DB.
- GPS conditions for working only when there's someone at home.
- Expose an API to choose a temp for all AC at once.
- Web page for setting up desired temp, enabling/disabling burst, GPS and body temp.

Ideally to be ran in a raspberri pi with touch screen.
