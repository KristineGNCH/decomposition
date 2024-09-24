import "./SearchBar.css";

export default function SearchBar(props) {
  const {searchCat, searchExample} = props;
  
  return (
    <div className="search__container">
      <nav className="search__nav">
        <ul className="search__menu">
          {searchCat.map((category, index) => {
            return (
              <li
                className="search__item"
                key={index}
              >
                <a href="#" className="search__item-link">

                  {category}
                </a>
              </li>
            );
          })}
          <li className="search__item">
            <a href="#" className="search__item-link"></a>
          </li>
        </ul>
      </nav>

      <form className="search__bar">
        <input
          className="search-bar-input"
          id="search-bar-input"
          type="text"
          name="search-bar-input"
        />
        <button className="search__button" type="submit">Найти
        </button>
      </form>

      <p className="search__example">
        {searchExample}
        <span className="search__example-item">например, фаза луны сегодня</span>
      </p>
    </div>
  );
}
