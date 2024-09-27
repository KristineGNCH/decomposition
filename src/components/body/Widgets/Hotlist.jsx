import "./Widgets.css";

export default function Hotlist({ title, items }) {
  return (
    <div className="widget hotlist">
      <a href="#" className="widget__title">
        {title}
      </a>

      <ul className="hotlist__items">
        {items.map(({ category, content }, index) => {
          return (
            <li className="hotlist__item widget__item" key={index}>
              <b>{category}</b>  — {content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
