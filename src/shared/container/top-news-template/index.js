import clsx from 'clsx';
import { connect } from 'react-redux';

import classes from './style.module.scss';
import Card from '../../components/card';
import ErrorNoRecords from '../../components/error-no-records';
import Spinner from '../../components/spinner';
import SearchField from '../../components/search-field';
import PATHS from '../../constants/paths';

const renderTopNews = (isLoading, items, history) => {
  if (isLoading) {
    return <Spinner />;
  } else if (!isLoading && items?.length === 0) {
    return (
      <ErrorNoRecords errorMessage={`Sorry, we don't have any records :(`} />
    );
  } else {
    return (
      items?.length > 0 &&
      items.map((item) => (
        <Card
          key={item.source.name + item.publishedAt + item.author}
          item={item}
          history={history}
        />
      ))
    );
  }
};

const TopNewsTemplate = ({
  headerText = 'Probamo -test test',
  isLoading,
  items,
  isSideNavVisible,
  match,
  history,
  term = '',
  handleSearchTerm = () => {},
}) => {
  const cssPageTemplate = clsx(
    classes['template-container'],
    isSideNavVisible && classes['small-nav-opened'],
  );

  return (
    <main className={cssPageTemplate}>
      <div className="block font-bold text-xl md:font-semibold lg:font-bold sm:text-lg md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600">
        <span className="hidden text-center md:text-left sm:inline-block">
          &#8226;
        </span>
        <h1 className="inline-block ml-2 text-center">{headerText}</h1>
      </div>
      {match.path === PATHS.search && (
        <SearchField term={term} handleSearchTerm={handleSearchTerm} />
      )}

      <div className={classes['cards-wrapper']}>
        <div className={classes['card-container']}>
          {renderTopNews(isLoading, items, history)}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = ({ navbar }) => {
  return {
    isSideNavVisible: navbar.isNavVisible,
  };
};

export default connect(mapStateToProps)(TopNewsTemplate);
