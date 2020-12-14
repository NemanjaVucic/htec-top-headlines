import clsx from 'clsx';
import qs from 'query-string';

import classes from './style.module.scss';
import Button from '../button';
import PATHS from '../../constants/paths';

const Card = ({ item, history }) => {
  const { title, description, urlToImage, content } = item;

  const goToArticle = () => {
    const q = qs.stringify({ title, urlToImage, content });

    history.push({
      pathname: PATHS.article,
      search: q,
    });
  };
  return (
    <div className={clsx(classes.container, 'bg-gray-200 rounded-2xl mt-5')}>
      <div
        className={clsx(
          'font-bold text-blue-900 text-md leading-6',
          classes['text-clap-2'],
        )}
      >
        {title}
      </div>
      {urlToImage?.length > 0 ? (
        <img
          className="w-full max-h-36 object-cover rounded-md"
          src={urlToImage}
          alt={title}
        />
      ) : (
        <div className="text-center">
          <strong>Oops!:(</strong> <i className="ml-4">Image link collapse!</i>
        </div>
      )}

      <div
        className={clsx(
          'text-gray-500 text-sm leading-5 mt-1',
          classes['text-clap-3'],
        )}
      >
        {description}
      </div>
      <Button type="info" clicked={goToArticle}>
        More
      </Button>
    </div>
  );
};

export default Card;
