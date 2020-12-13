import Backdrop from '../backdrop';
import Modal from '../modal';

const ServerError = ({
  show,
  errorMessage = 'Sorry, something is wrong, please revisit the page',
  onClickClosed,
}) => {
  return (
    <div>
      <Backdrop show={show} closed={onClickClosed} />
      <Modal show={show} closed={onClickClosed} content={errorMessage} />
    </div>
  );
};

export default ServerError;
