import classes from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';

const ExpandButton = ({ isExpanded, clicked }) => {
  return (
    <button className={classes['expand-button']} onClick={clicked}>
      <FontAwesomeIcon
        icon={!isExpanded ? faAngleDoubleDown : faAngleDoubleUp}
        size={'lg'}
      />
    </button>
  );
};

export default ExpandButton;
