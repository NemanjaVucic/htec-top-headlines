import CSSTransition from 'react-transition-group/CSSTransition';

import Button from '../button';
import classes from './style.module.scss';

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const Modal = ({ show, closed, content }) => {
  return (
    <CSSTransition
      in={show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: '',
        enterActive: classes['modal-open'],
        exit: '',
        exitActive: classes['modal-closed'],
      }}
    >
      <div className={classes.modal}>
        <h3>{content}</h3>
        <Button type="danger" clicked={closed}>
          Close
        </Button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
