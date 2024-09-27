import "./SearchBar.css";


export default function SearchBar(props) {
  const {
    searchCat,
    searchBarLabel,
    searchBtn,
    searchAdvice,
    searchExample,
  } = props;

  return (
    <div className="search__container">
      <nav className="search-nav">
        <ul className="search-nav__menu">
          {searchCat.map((category, index) => {
            return (
              <li className="search__nav active" key={index}>
                <a href="#" className="search-nav-menu__item-link">
                  {category}
                </a>
              </li>
            );
          })}
          <li className="search__item">
            <a href="#" className="search-item__link">
              ещё
            </a>
          </li>
        </ul>
      </nav>

      <form className="search__bar">
        <label className="search-bar__label" htmlFor="search-bar-input">
          {searchBarLabel}
        </label>
        <input className="search-bar-input" id="search-bar-input" type="text" name="search-bar-input" required />
        <button className="search-bar__button" type="submit">
          {searchBtn}
        </button>
      </form>

      <p className="search__advice">
        {searchAdvice}
        <span className="search__example">
          &nbsp;{searchExample}
        </span>
      </p>
    </div>
  );
}