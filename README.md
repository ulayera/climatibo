# climatibo
App for controlling several sensibo's in a more human way.

## Install instructions

1. Set `NODE_ENV` and `SENSIBO_API_KEY` env vars.
2. `npm run tsc`
3. `npm run start`

It will start reading your sensibo's sensors.

## Future features

Right now it does nothing, but soon it will:

- Expose an API to chose a temp for all sensibos at once
- Automatically adjust to selected temp.
- GPS conditions for working only when there's someone at home.
- Body temp input to adjust to person's temp.
- Burst mode when outside and inside temps are too much different.
- Web page for setting up desired temp, enabling/disabling burst, GPS and body temp.

Ideally to be ran in a raspberri pi with touch screen.
