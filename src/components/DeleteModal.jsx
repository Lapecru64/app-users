import React from 'react';

const DeleteModal = ({ userName, closeModal }) => {
  return (
    <div className="delete-modal" onClick={closeModal}>
      <p>The user {userName} has been deleted</p>
    </div>
  );
};

export default DeleteModal;
