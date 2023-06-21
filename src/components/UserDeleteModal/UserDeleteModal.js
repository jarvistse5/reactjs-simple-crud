import "./UserDeleteModal.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const UserDeleteModal = ({showDeleteModal, hideDeleteModal, user, loading, onDeleteUser}) => {
  return (
    <Modal show={showDeleteModal} onHide={hideDeleteModal}>
      <Modal.Header>Delete User</Modal.Header>
      <Modal.Body>
        Are you sure to delete user {user?.firstname} {user?.lastname}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideDeleteModal}>
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
            <Button variant="danger" onClick={onDeleteUser}>
              Delete
            </Button>
          )
        }
      </Modal.Footer>
    </Modal>
  );
};

export default UserDeleteModal;