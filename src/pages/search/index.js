import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios';
import { API_BASE_URL } from '../../shared/constants/api';
import TopNewsTemplate from '../../shared/container/top-news-template';
import { selectedCountry } from '../../shared/helpers/';

const Search = ({ language, ...rest }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        const res = await axios.get(
          `${API_BASE_URL}?country=${language.toLowerCase()}&q=${term}`,
        );
        setSearchResults(res.data?.articles);
        setIsLoading(false);
      })();
    } catch (err) {
      setIsLoading(false);
    }
  }, [language, term]);

  const handleSearchTerm = (event) => {
    const {
      target: { value },
    } = event;
    setTerm(value);
  };

  return (
    <TopNewsTemplate
      headerText={`Search top news from ${selectedCountry(language)} by term:`}
      isLoading={isLoading}
      items={searchResults}
      term={term}
      handleSearchTerm={handleSearchTerm}
      {...rest}
    />
  );
};

const mapStateToProps = ({ navbar }) => {
  return {
    language: navbar.language,
  };
};

export default connect(mapStateToProps)(Search);
