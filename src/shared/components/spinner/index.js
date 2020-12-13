import clsx from 'clsx';

import classes from './style.module.scss';

const Spinner = () => (
  <div className="absolute  w-full h-full flex justify-center items-center">
    <div className={classes['sk-cube-grid']}>
      <div className={clsx(classes['sk-cube'], classes['sk-cube2'])}></div>
      <div className={clsx(classes['sk-cube'], classes['sk-cube3'])}></div>
      <div className={clsx(classes['sk-cube'], classes['sk-cube4'])}></div>
      <div className={clsx(classes['sk-cube'], classes['sk-cube1'])}></div>
      <div className={clsx(classes['sk-cube'], classes['sk-cube5'])}></div>
      <div className={clsx(classes['sk-cube'], classes['sk-cube6'])}></div>
      <div className={clsx(classes['sk-cube'], classes['sk-cube7'])}></div>
      <div className={clsx(classes['sk-cube'], classes['sk-cube8'])}></div>
      <div className={clsx(classes['sk-cube'], classes['sk-cube9'])}></div>
    </div>
  </div>
);

export default Spinner;
