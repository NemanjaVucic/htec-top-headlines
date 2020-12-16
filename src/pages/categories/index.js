import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';

import axios from '../../axios';
import classes from './style.module.scss';
import { API_BASE_URL } from '../../shared/constants/api';
import Spinner from '../../shared/components/spinner';
import { LANGUAGES } from '../../shared/constants/countries-languages';
import { CATEGORIES } from '../../shared/constants/categories';
import Slider from '../../shared/components/slider';

const categoriesObjValues = Object.values(CATEGORIES);

const isCategoryExpandInitObj = {};
categoriesObjValues.forEach((categoryNameKey) => {
  isCategoryExpandInitObj[categoryNameKey] = false;
});

const renderCategories = (
  isLoading,
  items,
  isCategoryExpandObj,
  handleOnExpandClicked,
) => {
  if (isLoading) {
    return <Spinner />;
  } else {
    return items.map((category) => {
      const [categoryName] = Object.keys(category);
      const slides = category[categoryName];

      return (
        <Slider
          key={categoryName}
          categoryName={categoryName}
          slides={slides}
          isCategoryExpand={isCategoryExpandObj[categoryName]}
          onExpandClicked={handleOnExpandClicked}
        />
      );
    });
  }
};

const Categories = ({ language, isSideNavVisible }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCategoryExpandObj, setIsCategoryExpandObj] = useState(
    isCategoryExpandInitObj,
  );

  const handleOnExpandClicked = (categoryNameKey) => {
    setIsCategoryExpandObj({
      ...isCategoryExpandObj,
      [categoryNameKey]: !isCategoryExpandObj[categoryNameKey],
    });
  };

  const fetchCategories = useCallback(
    async (...categoriesList) => {
      const fetchCategory = async (category) => {
        const res = await axios.get(
          `${API_BASE_URL}?category=${category}&country=${language.toLowerCase()}`,
        );
        return { [category]: [...res?.data?.articles] };
      };

      setIsLoading(true);
      try {
        const promises = [];
        for (const category of categoriesList) {
          promises.push(fetchCategory(category));
        }
        const categoryList = await Promise.all(promises);
        setCategories(categoryList);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    },
    [language],
  );

  useEffect(() => {
    const categoriesNames = Object.values(CATEGORIES);
    fetchCategories(...categoriesNames);
  }, [fetchCategories, language]);

  const cssCategories = clsx(
    classes.container,
    isSideNavVisible && classes['small-nav-opened'],
  );

  return (
    <main className={cssCategories}>
      <div className="block font-bold text-xl md:font-semibold lg:font-bold sm:text-lg md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600">
        <span className="hidden text-center md:text-left sm:inline-block">
          &#8226;
        </span>
        <h1 className="inline-block ml-2 text-center">{`Top 5 news by categories from ${LANGUAGES[language]}:`}</h1>
      </div>
      <div className={classes['categories-wrapper']}>
        {renderCategories(
          isLoading,
          categories,
          isCategoryExpandObj,
          handleOnExpandClicked,
        )}
      </div>
    </main>
  );
};

const mapStateToProps = ({ navbar }) => {
  return {
    language: navbar.language,
    isSideNavVisible: navbar.isNavVisible,
  };
};

export default connect(mapStateToProps)(Categories);
