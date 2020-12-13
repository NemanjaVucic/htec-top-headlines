import clsx from 'clsx';

import classes from './style.module.scss';

const Backdrop = ({ show, closed, children }) => {
  const cssBackdrop = clsx([
    classes.backdrop,
    show ? classes['backdrop-open'] : classes['backdrop-closed'],
    'absolute w-full h-full top-0 left-0 bg-gray-300 opacity-5',
  ]);

  return (
    <div className={cssBackdrop} onClick={closed}>
      {children}
    </div>
  );
};

export default Backdrop;
