interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

interface Condition {
    text: string;
    icon: string;
    code: number;
}

interface CurrentWeather {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}

interface WeatherData {
    location: Location;
    current: CurrentWeather;
}

const exampleWeatherData: WeatherData = {
    location: {
        name: "London",
        region: "City of London, Greater London",
        country: "United Kingdom",
        lat: 51.5171,
        lon: -0.1062,
        tz_id: "Europe/London",
        localtime_epoch: 1737347157,
        localtime: "2025-01-20 04:25",
    },
    current: {
        last_updated_epoch: 1737346500,
        last_updated: "2025-01-20 04:15",
        temp_c: 2.3,
        temp_f: 36.1,
        is_day: 0,
        condition: {
            text: "Light rain",
            icon: "//cdn.weatherapi.com/weather/64x64/night/296.png",
            code: 1183,
        },
        wind_mph: 2.5,
        wind_kph: 4.0,
        wind_degree: 146,
        wind_dir: "SSE",
        pressure_mb: 1018.0,
        pressure_in: 30.06,
        precip_mm: 0.0,
        precip_in: 0.0,
        humidity: 93,
        cloud: 100,
        feelslike_c: 1.5,
        feelslike_f: 34.7,
        windchill_c: 2.5,
        windchill_f: 36.6,
        heatindex_c: 3.2,
        heatindex_f: 37.8,
        dewpoint_c: -1.5,
        dewpoint_f: 29.3,
        vis_km: 5.0,
        vis_miles: 3.0,
        uv: 0.0,
        gust_mph: 4.0,
        gust_kph: 6.4,
    },
};
