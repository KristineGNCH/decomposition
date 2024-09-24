import "./index.css";

import News from "./components/header/News/News";
import newsCat from "./components/header/News/newsCat";
import newsArticles from "./components/header/News/newsArticles.jsx";
import ExchangeRates from "./components/header/Currency/ExchangeRates.jsx";
import currencyRates from "./components/header/Currency/currencyRates.jsx";
import Ad from "./components/header/Ad/Ad";
import ImageAd from "./components/header/Ad/ImageAd";
import SearchBar from "./components/body/SearchBar/SearchBar.jsx";
import SearchCat from "./components/body/SearchBar/SearchCat.jsx";
import Banner from "./components/body/Banner/Banner.jsx";
import WeatherWidget from "./components/body/Widgets/Weather.jsx"

function App() {
  return (
    <>
      <header className="app-header">
        <div className="app-wrapper__header">
          <div className="app-header__main">
            <News newsCat={newsCat} newsArticles={newsArticles} />
            {<ExchangeRates currencyRates={currencyRates} />}
          </div>

          <Ad
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <ImageAd
              containerClass="ads__image-container"
              imgClass="Ad_image"
              url="../src/assets/double-checked-svgrepo-com.svg"
              alt="Здесь должна быть картинка рекламы"
            />
          </Ad>
        </div>
      </header>

      <section className="app-body">
        <div className="app-wrapper__body">
          <ImageAd
            containerClass="logo"
            imgClass="logo__img"
            src="../src/assets/Yandex_logo_Cyrillic.svg"
            alt="Yandex Logo"
          />
          <SearchBar
            SearchCat={SearchCat}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё."
          />
        </div>
      </section>
      <section className="app-body banner__ad" >
        <Banner />
      </section>
      <section>
      <WeatherWidget
      tempValue="+17"
      tempValueMorning="+17"
      tempValueAfternoon="+20"
      />
      </section>
    </>
  );
}

export default App;
