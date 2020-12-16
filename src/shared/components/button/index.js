import clsx from 'clsx';

import classes from './style.module.scss';

const buttonTypes = ['danger', 'success', 'info'];

const Button = ({ type, clicked, children, prefix, suffix, classNames }) => {
  const typeLowerCase = type.toLowerCase();

  let buttonStyle = 'info';
  if (buttonTypes.includes(typeLowerCase)) {
    buttonStyle = typeLowerCase;
  }

  return (
    <button
      type="button"
      className={clsx(classes[buttonStyle], classNames)}
      onClick={clicked}
    >
      <p className="mr-1 sm:mr-2 ">{prefix}</p>
      {children}
      <p className="ml-1 sm:ml-2">{suffix}</p>
    </button>
  );
};

export default Button;
