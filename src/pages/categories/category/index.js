import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

import axios from '../../../axios';
import TopNewsTemplate from '../../../shared/container/top-news-template';
import { selectedCountry } from '../../../shared/helpers';
import { API_BASE_URL } from '../../../shared/constants/api';
import { CATEGORIES } from '../../../shared/constants/categories';

const Category = ({ language, location, ...rest }) => {
  const [newsForCategory, setNewsForCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryName] = useState(
    qs.parse(location.search).categoryName ?? CATEGORIES.GENERAL,
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${API_BASE_URL}?country=${language.toLowerCase()}&category=${categoryName}`,
        );

        setNewsForCategory(res.data?.articles);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    })();
  }, [categoryName, language]);

  return (
    <TopNewsTemplate
      headerText={`Top ${categoryName} news from ${selectedCountry(language)}:`}
      isLoading={isLoading}
      items={newsForCategory}
      {...rest}
    />
  );
};

const mapStateToProps = ({ navbar }) => {
  return {
    language: navbar.language,
  };
};

export default connect(mapStateToProps)(Category);
