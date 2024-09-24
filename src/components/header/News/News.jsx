/* eslint-disable react/prop-types */
import '../News/News.css'
import Clock from './Clock';

export default function News({ newsCat, newsArticles }) {
  return (
    <div className="news">
      <nav className="news-nav">
        <ul className="nav-menu">
          {newsCat.map((category, index) => {
            return (
              <li
                className={`nav-menu__item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <a href="#" className="news-link">
                  {" "}
                  {category}{" "}
                </a>
              </li>
            );
          })}
        </ul>
        <Clock />
      </nav>
      <div className="news__container">
        <ul>
          {newsArticles.map((name, index) => {
            return (
              <li className="news__item" key={index}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
