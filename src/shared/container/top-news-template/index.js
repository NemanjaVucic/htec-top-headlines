import clsx from 'clsx';
import { connect } from 'react-redux';

import classes from './style.module.scss';
import Card from '../../components/card';
import ErrorNoRecords from '../../components/error-no-records';
import Spinner from '../../components/spinner';

const renderTopNews = (isLoading, items) => {
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
}) => {
  const cssPageTemplate = clsx(
    classes['page-tamplate'],
    isSideNavVisible && classes['small-nav-opened'],
  );

  return (
    <main className={cssPageTemplate}>
      <div>
        <span className={classes.bullet}>&#8226;</span>
        <h1 className="font-medium text-2xl inline-block ml-2 text-gray-600">
          {headerText}
        </h1>
      </div>
      <div className={classes['cards-wrapper']}>
        <div className={classes['card-container']}>
          {renderTopNews(isLoading, items)}
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
