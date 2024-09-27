import "./Widgets.css";

export default function MapWidget({ content, title }) {
  return (
    <div className="widget map">
      <a href="#" className="widget__title">
        {title}
      </a>
      <span className="widget__content ">{content}</span>
    </div>
  );
}
