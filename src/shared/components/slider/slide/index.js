import clsx from 'clsx';
import qs from 'query-string';

import classes from './style.module.scss';
import PATHS from '../../../constants/paths';
import { withRouter } from 'react-router-dom';

const Slide = ({ item, slideWidth, isCategoryExpand, history }) => {
  const { title, urlToImage, content } = item;

  const goToArticle = () => {
    const q = qs.stringify({ title, urlToImage, content });

    history.push({
      pathname: PATHS.article,
      search: q,
    });
  };

  return (
    <button
      onClick={goToArticle}
      className={clsx(
        classes.slide,
        !isCategoryExpand && classes['hide-element'],
      )}
      style={{ transform: `translateX(${slideWidth}%)` }}
    >
      <img
        className={clsx(classes.image, 'object-cover w-full')}
        src={item.urlToImage}
        alt="slide"
      />
      <p
        className={clsx(
          classes['text-clap-2'],
          'text-sm text-gray-400 text-center',
        )}
      >
        {item.title}
      </p>
    </button>
  );
};

export default withRouter(Slide);
