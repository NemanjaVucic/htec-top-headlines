import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';

import axios from '../../axios';
import classes from './style.module.scss';
import { API_BASE_URL } from '../../shared/constants/api';
import Card from '../../shared/card';

const countries = {
  GB: 'Great Britain',
  US: 'United States',
};

const selectedCountry = (language) => {
  return countries[language] || '';
};

const TopNews = ({ isSideNavVisible, language }) => {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    const res = await axios.get(
      `${API_BASE_URL}?country=${language.toLowerCase()}`,
    );
    setNews(res.data?.articles);
  }, [language]);

  const cssTopNews = clsx(
    classes['top-news'],
    isSideNavVisible && classes['small-nav-opened'],
  );

  return (
    <div className={cssTopNews}>
      <div>
        <span className={classes.bullet}>&#8226;</span>
        <h1 className="font-medium text-2xl inline-block ml-2 text-gray-600">
          Top news from {selectedCountry(language)}:
        </h1>
      </div>
      <div className={classes['card-container']}>
        {news.length > 0 ? (
          news.map((n) => (
            <Card key={n.source.name + n.publishedAt + n.author} news={n} />
          ))
        ) : (
          <div className="relative w-80 mt-44 m-auto sm:ml-28 md:ml-52 lg:ml-80 xl:ml-96 text-center">
            <h1 className="font-bold text-lg">{`Sorry, we don't have any records :(`}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ navbar }) => {
  return {
    isSideNavVisible: navbar.isNavVisible,
    language: navbar.language,
  };
};

export default connect(mapStateToProps)(TopNews);
