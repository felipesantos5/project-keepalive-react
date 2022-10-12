import { useEffect, useState } from "react";

export default function Locate() {
  const [city, setCity] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      if (!lat && !long) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        }, defaultLocation);
      }
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a329dc5e897a55fceb4fc1ef75c9509f&lang=pt_br`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setCity(`${result.name} - ${result.sys.country}`);
          setTemp(Math.round(result.main.temp - 273.15));
        });
    };
    fetchData();
  }, [lat, long]);

  function defaultLocation() {
    setLat(-23.46);
    setLong(-46.54);
  }

  return (
    <div className="wraper-weather">
      <p className="place">{city}</p>

      <div className="wraper-weather-temperature">
        <img className="cloud" src="./images/cloud.svg" alt="" />
        <p className="temperature">{temp}°</p>
      </div>
    </div>
  );
}
