/* eslint-disable react/prop-types */
import "./Ad.css";

export default function Ad(props) {
  const { title, description, children } = props;

  return (
    <div className="ads">
      {children}
      <h1 className="ad__title">
        <a href="#" className="ad-title__link">
          {title}
        </a>
      </h1>
      <p className="ad__description">{description}</p>
    </div>
  );
}
