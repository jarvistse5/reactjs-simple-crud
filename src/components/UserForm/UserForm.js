import "./UserForm.css";
import Form from 'react-bootstrap/Form';

const UserForm = ({user, onCreateUser, onUpdateUser}) => {
  return (
    <Form className="form" id="userForm" onSubmit={user ? onUpdateUser : onCreateUser}>
      <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" defaultValue={user?.firstname} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" defaultValue={user?.lastname} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Eamil</Form.Label>
        <Form.Control type="email" placeholder="Eamil" defaultValue={user?.email} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" defaultValue={user?.age} />
      </Form.Group>
    </Form>
    
  );
};

export default UserForm;