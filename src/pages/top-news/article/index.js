import clsx from 'clsx';
import qs from 'query-string';
import { connect } from 'react-redux';

import classes from './style.module.scss';
import Button from '../../../shared/components/button';

const Article = ({ location, history, isSideNavVisible }) => {
  const cssArticle = clsx([
    classes.container,
    isSideNavVisible && classes['small-nav-opened'],
  ]);

  const article = qs.parse(location.search);

  return (
    <div className={cssArticle}>
      <div className="w-full flex flex-col justify-between h-full p-5">
        <h2 className="pb-3 text-gray-700 font-bold text-xl text-center">
          {article.title}
        </h2>
        <img
          src={article.urlToImage}
          className="flex-1 py-2 h-2/4 object-cover w-full rounded-3xl"
        />
        <div className="py-2 text-md text-gray-400 capitalize">
          {article.content}
        </div>
        <Button
          className=""
          prefix={'<'}
          type="danger"
          clicked={() => history.goBack()}
        >
          Back to list
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ navbar }) => {
  return {
    isSideNavVisible: navbar.isNavVisible,
  };
};

export default connect(mapStateToProps)(Article);
