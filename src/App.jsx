
import { useEffect, useState } from 'react';
import './App.css';
import useFetch from "./hooks/useFetch";
import FormUser from './components/FormUser';
import UserCard from './components/UserCard';
import DeleteModal from './components/DeleteModal';

function App() {
  const baseUrl = "https://users-crud.academlo.tech";

  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] = useFetch(baseUrl);
  const [updateInfo, setUpdateInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletedUserName, setDeletedUserName] = useState(null); 
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setUpdateInfo(null);
  };

  const deleteUserAndOpenModal = (path, id, name) => { 
    deleteUserById(path, id);
    setDeletedUserName(name);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => { 
    setIsDeleteModalOpen(false);
    setDeletedUserName(null);
  };

  return (
    <div className="app">
      <h1>Users</h1>
      <button className="app__button" onClick={toggleModal}>+ Add a new user</button>
      {isModalOpen && (
        <div className="user-modal">
          <FormUser
            createNewUser={createNewUser}
            updateInfo={updateInfo}
            updateUserById={updateUserById}
            setUpdateInfo={setUpdateInfo}
            toggleModal={toggleModal}
          />
        </div>
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          userName={deletedUserName}
          closeModal={closeDeleteModal}
        />
      )}
      <div className="user-list">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserAndOpenModal}
            setUpdateInfo={setUpdateInfo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
