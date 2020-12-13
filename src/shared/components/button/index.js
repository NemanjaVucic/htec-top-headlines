import classes from './style.module.scss';
const buttonTypes = ['danger', 'success', 'info'];

const Button = ({ type, clicked, children }) => {
  const typeLowerCase = type.toLowerCase();

  let buttonStyle = 'info';
  if (buttonTypes.includes(typeLowerCase)) {
    buttonStyle = typeLowerCase;
  }

  return (
    <button
      type="button"
      className={classes[buttonStyle]}
      onClick={() => clicked}
    >
      {children}
    </button>
  );
};

export default Button;
