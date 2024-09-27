import "./index.css";

import News from "./components/header/News/News.jsx";
import newsCat from "./data/newsCat.jsx";
import newsArticles from "./data/newsArticles.jsx";
import ExchangeRates from "./components/header/Currency/ExchangeRates.jsx";
import currencyRates from "./data/currencyRates.jsx";
import Ad from "./components/header/Ad/Ad.jsx";
import ImageAd from "./components/header/Ad/ImageAd.jsx";

import SearchBar from "./components/body/SearchBar/SearchBar.jsx";
import searchCat from "./data/searchCategories.jsx";

import Banner from "./components/body/Banner/Banner.jsx";
import WeatherWidget from "./components/body/Widgets/Weather.jsx";
import MapWidget from "./components/body/Widgets/Map.jsx";
import Broadcast from "./components/body/Widgets/Broadcast.jsx";
import BroadcastLive from "./data/BroadcastLive.jsx";
import TVscheduel from "./components/body/Widgets/TVscheduel.jsx";
import TVprograms from "./data/TVprograms.jsx";
import Hotlist from "./components/body/Widgets/Hotlist.jsx";
import HotlistData from "./data/Hotlist.jsx";

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
              imgClass="ad_image"
              src="./assets/double-checked-svgrepo-com.svg"
              alt="image"
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
            alt="image"
          />
          <SearchBar
            searchCat={searchCat}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />
        </div>
      </section>

      <section className="app-body banner__ad">
        <Banner />
      </section>

      <section className="app-body widgets__container ">
        <WeatherWidget
          tempValue="+17"
          tempValueMorning="+17"
          tempValueAfternoon="+20"
        />

        <MapWidget title="Карта Германии" content="Расписание" />
        <Broadcast title="Телепрограмма" items={BroadcastLive} />
        <Hotlist  title="Посещаемое" items={HotlistData} />
        <TVscheduel title="Телепрограмма" items={TVprograms} />
      </section>
    </>
  );
}

export default App;
