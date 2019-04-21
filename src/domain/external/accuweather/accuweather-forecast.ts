import { AccuweatherTemperature } from "./accuweather-temperature";

export class AccuweatherForecast {
    private _DateTime: string;
    private _EpochDateTime: number;
    private _WeatherIcon: number;
    private _IconPhrase: string;
    private _IsDaylight: boolean;
    private _Temperature: AccuweatherTemperature;
    private _PrecipitationProbability: number;
    private _MobileLink: string;
    private _Link: string;

    constructor(DateTime: string, EpochDateTime: number, WeatherIcon: number, IconPhrase: string, IsDaylight: boolean, Temperature: AccuweatherTemperature, PrecipitationProbability: number, MobileLink: string, Link: string) {
        this._DateTime = DateTime;
        this._EpochDateTime = EpochDateTime;
        this._WeatherIcon = WeatherIcon;
        this._IconPhrase = IconPhrase;
        this._IsDaylight = IsDaylight;
        this._Temperature = Temperature;
        this._PrecipitationProbability = PrecipitationProbability;
        this._MobileLink = MobileLink;
        this._Link = Link;
    }

    get DateTime(): string {
        return this._DateTime;
    }

    set DateTime(value: string) {
        this._DateTime = value;
    }

    get EpochDateTime(): number {
        return this._EpochDateTime;
    }

    set EpochDateTime(value: number) {
        this._EpochDateTime = value;
    }

    get WeatherIcon(): number {
        return this._WeatherIcon;
    }

    set WeatherIcon(value: number) {
        this._WeatherIcon = value;
    }

    get IconPhrase(): string {
        return this._IconPhrase;
    }

    set IconPhrase(value: string) {
        this._IconPhrase = value;
    }

    get IsDaylight(): boolean {
        return this._IsDaylight;
    }

    set IsDaylight(value: boolean) {
        this._IsDaylight = value;
    }

    get Temperature(): AccuweatherTemperature {
        return this._Temperature;
    }

    set Temperature(value: AccuweatherTemperature) {
        this._Temperature = value;
    }

    get PrecipitationProbability(): number {
        return this._PrecipitationProbability;
    }

    set PrecipitationProbability(value: number) {
        this._PrecipitationProbability = value;
    }

    get MobileLink(): string {
        return this._MobileLink;
    }

    set MobileLink(value: string) {
        this._MobileLink = value;
    }

    get Link(): string {
        return this._Link;
    }

    set Link(value: string) {
        this._Link = value;
    }
}