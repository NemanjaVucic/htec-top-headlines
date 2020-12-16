import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ExpandButton from '../expand-button';
import Slide from './slide';
import PATHS from '../../constants/paths';
import classes from './style.module.scss';

const Slider = ({
  categoryName,
  slides,
  isCategoryExpand,
  onExpandClicked,
}) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100);
  };

  const goRight = () => {
    x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100);
  };

  const expandClicked = (categoryNameKey) => {
    onExpandClicked(categoryNameKey);
  };

  return (
    <div
      className={clsx(
        classes['slider-container'],
        !isCategoryExpand && classes['slider-container-just-header'],
      )}
    >
      <h3 className={classes.header}>
        <Link
          to={{
            pathname: PATHS.category,
            search: `?categoryName=${categoryName}`,
          }}
          className={classes.link}
        >
          {categoryName}
        </Link>
        <ExpandButton
          clicked={() => expandClicked(categoryName)}
          isExpanded={isCategoryExpand}
        />
      </h3>

      <button
        className={clsx(
          classes['button-left'],
          !isCategoryExpand && classes['hide-element'],
        )}
        onClick={goLeft}
      >
        {'<'}
      </button>

      <div className={classes.slider}>
        {slides.map((item, index) => {
          return (
            <Slide
              key={index}
              item={item}
              slideWidth={x}
              isCategoryExpand={isCategoryExpand}
            />
          );
        })}
      </div>

      <button
        className={clsx(
          classes['button-right'],
          !isCategoryExpand && classes['hide-element'],
        )}
        onClick={goRight}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Slider;
