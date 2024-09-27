import "./Widgets.css";

export default function TVscheduel({ title, items }) {
  return (
    <div className="widget tv-scheduel">
       <a href="#" className="widget__title">
        {title}
      </a>
      <ul className="tv-scheduel__items">
      {items.map(({ time, name, source }, index) => {
          return (
            <li className="tv-scheduel__item widget__item" key={index}>
                 <span className="tv-scheduel__time">
                    {time ? `${time}` : ''}
                    </span>
                    {" "}
              <span className="tv-scheduel__item-name widget__content">{name}</span>
              {" "}
              <span className="tv-scheduel__item-source widget__additional-content">
                {source}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
