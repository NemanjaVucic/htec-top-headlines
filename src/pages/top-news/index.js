import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios';
import { API_BASE_URL } from '../../shared/constants/api';
import TopNewsTemplate from '../../shared/container/top-news-template';
import { selectedCountry } from '../../shared/helpers/';

const TopNews = ({ language, ...rest }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${API_BASE_URL}?country=${language.toLowerCase()}`,
      );
      setIsLoading(false);
      setNews(res.data?.articles);
    } catch (err) {
      setIsLoading(false);
    }
  }, [language]);

  return (
    <TopNewsTemplate
      headerText={`Top news from ${selectedCountry(language)}:`}
      isLoading={isLoading}
      items={news}
      {...rest}
    />
  );
};

const mapStateToProps = ({ navbar }) => {
  return {
    language: navbar.language,
  };
};

export default connect(mapStateToProps)(TopNews);
