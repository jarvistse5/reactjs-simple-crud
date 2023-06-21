import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import UserTable from './components/UserTable/UserTable';
import UserModal from './components/UserModal/UserModal';
import Button from 'react-bootstrap/Button';
import './App.css';
import UserDeleteModal from './components/UserDeleteModal/UserDeleteModal';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsers(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const onCreateUser = async (event) => {
    event.preventDefault();
    setLoading(true);

    const user = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      age: event.target.age.value
    }

    console.log(user);

    try {
      const response = await axios.post(`${apiUrl}/users`, user);
      console.log(response.data);
      hideModal();
      fetchUsers();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const onUpdateUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    const user_id = selectedUser._id;
    const data = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      age: event.target.age.value
    }

    console.log(data);

    try {
      const response = await axios.put(`${apiUrl}/users/${user_id}`, data);
      hideModal();
      console.log(response.data);
      fetchUsers();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const onDeletedUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    const user_id = selectedUser._id;

    console.log(user_id);

    try {
      const response = await axios.delete(`${apiUrl}/users/${user_id}`);
      hideDeleteModal();
      console.log(response.data);
      fetchUsers();
    } catch (err) {
      console.log(err);
      hideDeleteModal();
    }
  }

  const hideModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setLoading(false);
  }

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedUser(null);
    setLoading(false);
  }

  const openCreateDialog = () => {
    setShowModal(true);
    setSelectedUser(null);
    setLoading(false);
  }

  const handleUpdateUser = (target) => {
    setSelectedUser(target);
    setShowModal(true);
    setLoading(false);
  }

  const handleDeleteUser = (target) => {
    setSelectedUser(target);
    setShowDeleteModal(true);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers(); // eslint-disable-next-line
  }, []); // eslint-disable-next-line
  

  return (
    <div className="App">
      <Header></Header>
      <Wrapper>
        <div className='text-center'>
          Node.js + Express.js + MongoDB + React.js CRUD Demo
        </div>
        <div className='text-center'>
          By Jarvis Tse
        </div>
        <h2>Users</h2>
        <Button variant="primary" className="my-4" onClick={openCreateDialog}>Add User</Button>
        <UserTable users={users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser}></UserTable>
        <UserModal 
          showModal={showModal} 
          loading={loading}
          user={selectedUser}
          hideModal={hideModal}
          onCreateUser={onCreateUser}
          onUpdateUser={onUpdateUser}>
        </UserModal>
        <UserDeleteModal
          showDeleteModal={showDeleteModal}
          hideDeleteModal={hideDeleteModal}
          user={selectedUser}
          loading={loading}
          onDeleteUser={onDeletedUser}>
        </UserDeleteModal>
      </Wrapper>
    </div>
  );
}

export default App;
