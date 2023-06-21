import "./UserTable.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const UserTable = ({users, handleUpdateUser, handleDeleteUser}) => {
  return (
    <div className="table_container">
      <Table striped bordered>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user._id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Button variant="warning" className="m-1" onClick={() => handleUpdateUser(user)}>Edit</Button>
                  <Button variant="danger" className="m-1" onClick={() => handleDeleteUser(user)}>Delete</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;