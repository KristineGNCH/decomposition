
import "./Widgets.css";

export default function WeatherWidget(props) {
  const { tempValue, tempValueMorning, tempValueAfternoon } = props;

  return (
    <div className="widget weather">
      <a href="#" className="widget__title">Погода</a>
      <div className="weather__wrapper">
        <img
          src="https://yastatic.net/weather/i/icons/confident/dark/svg/ovc_ra.svg"
          alt="error"
        />
        <span className="temp__value-avarage widget__content">
          {tempValue}&deg;
        </span>
        <div className="weather__detailed">
          <span className="temp__value-morning widget__content">
            Утром {tempValueMorning},
          </span>
          <span className="temp__value-afternoon widget__content">
            днём {tempValueAfternoon}
          </span>
        </div>
      </div>
    </div>
  );
}
