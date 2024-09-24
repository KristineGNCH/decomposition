/* eslint-disable react/prop-types */
import "./Widgets.css";

export default function WeatherWidget(props) {
  const { tempValue, tempValueMorning, tempValueAfternoon } = props;

  return (
    <div className="widget weather">
      <h1 className="widget__title">Погода</h1>
      <div className="weather__wrapper">
        <img
          src="https://yastatic.net/weather/i/icons/confident/dark/svg/ovc_ra.svg"
          alt="error"
        />
        <span className="temp__value temp__value_avarage">
          {tempValue}&deg;
        </span>
        <div className="weather__detailed">
          <span className="temp__value temp__value_morning">
            Утром {tempValueMorning},
          </span>
          <span className="temp__value temp__value_afternoon">
            днём {tempValueAfternoon}
          </span>
        </div>
      </div>
    </div>
  );
}
