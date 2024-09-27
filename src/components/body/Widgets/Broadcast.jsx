import "./Widgets.css";

export default function Broadcast({ title, items }) {
  return (
    <div className="widget broadcast">
       <a href="#" className="widget__title">
        {title}
      </a>
      <ul className="broadcast__items"> 
        {items.map(({ button, name, source }, index) => {
          return (
            <li className="broadcast__item widget__item" key={index}>
              <span className="play-button">
                
                    </span>
              <span className="broadcast__item-name widget__content">{name}</span>
              {" "}
              {" "}
              <span className="broadcast__item-source widget__additional-content">
                {source}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
