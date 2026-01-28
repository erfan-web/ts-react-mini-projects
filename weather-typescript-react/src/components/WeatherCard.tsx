export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
    },
  ];
  wind: {
    speed: number;
  };
}
type WeatherCardProps = {
  weatherDetail: WeatherData;
};
const WeatherCard = ({ weatherDetail }: WeatherCardProps) => {
  const { main, wind, weather } = weatherDetail;
  return (
    <div className="weather-card">
      <h2>{weather[0].description}</h2>
      <p>temp: {main.temp}</p>
      <p>humidity: {main.humidity}</p>
      <p>wind: {wind.speed}</p>
    </div>
  );
};
export default WeatherCard;
