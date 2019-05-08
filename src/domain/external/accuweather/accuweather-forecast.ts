import { AccuweatherTemperature } from "./accuweather-temperature";

export interface IAccuweatherForecast {
    DateTime?: string;
    EpochDateTime?: number;
    WeatherIcon?: number;
    IconPhrase?: string;
    IsDaylight?: boolean;
    Temperature?: AccuweatherTemperature;
    PrecipitationProbability?: number;
    MobileLink?: string;
    Link?: string;
}

export class AccuweatherForecast implements IAccuweatherForecast{

    get DateTime(): string {
        return this.DateTime;
    }

    set DateTime(value: string) {
        this.DateTime = value;
    }

    get EpochDateTime(): number {
        return this.EpochDateTime;
    }

    set EpochDateTime(value: number) {
        this.EpochDateTime = value;
    }

    get WeatherIcon(): number {
        return this.WeatherIcon;
    }

    set WeatherIcon(value: number) {
        this.WeatherIcon = value;
    }

    get IconPhrase(): string {
        return this.IconPhrase;
    }

    set IconPhrase(value: string) {
        this.IconPhrase = value;
    }

    get IsDaylight(): boolean {
        return this.IsDaylight;
    }

    set IsDaylight(value: boolean) {
        this.IsDaylight = value;
    }

    get Temperature(): AccuweatherTemperature {
        return this.Temperature;
    }

    set Temperature(value: AccuweatherTemperature) {
        this.Temperature = value;
    }

    get PrecipitationProbability(): number {
        return this.PrecipitationProbability;
    }

    set PrecipitationProbability(value: number) {
        this.PrecipitationProbability = value;
    }

    get MobileLink(): string {
        return this.MobileLink;
    }

    set MobileLink(value: string) {
        this.MobileLink = value;
    }

    get Link(): string {
        return this.Link;
    }

    set Link(value: string) {
        this.Link = value;
    }
}