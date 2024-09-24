/* eslint-disable react/prop-types */
import "./ExchangeRates.css";

export default function ExchangeRates({ currencyRates }) {
  return (
    <div className="rates__container">
      <ul className="rate__items">
        {currencyRates.map((item, index) => {
          return (
            <li className="rate__item" key={index}>
              <a href="#" className="rate__link">
                {item.currency}
              </a>
              <span className="rates__item-rate">{item.rate}</span>
            </li>
          );
        })}
        <li className="extrs-rates__item-rate">
        <a href="#" className="extra-rates__link"></a>
        </li>
      </ul>
      
    </div>
  );
}
