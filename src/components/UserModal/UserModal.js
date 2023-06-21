import "./UserModal.css";
import Modal from 'react-bootstrap/Modal';
import UserForm from '../UserForm/UserForm';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const UserModal = ({showModal, loading, user, hideModal, onCreateUser, onUpdateUser}) => {
  const title = user ? 'Update User' : 'Create User';
  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <UserForm user={user} onCreateUser={onCreateUser} onUpdateUser={onUpdateUser}></UserForm>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Close
        </Button>
        {
          loading ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </Button>
          ) : (
            <Button variant="primary" type="submit" form="userForm">
              Save
            </Button>
          )
        }
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;