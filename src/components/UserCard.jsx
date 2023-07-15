
const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {
  const handleDelete = () => {
    deleteUserById("/users", user.id, `${user.first_name} ${user.last_name}`);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
  };

  return (
    <article className="user-card">
      <h2 className="user-card__name">{`${user.first_name} ${user.last_name}`}</h2>
      <hr className="user-card__divider" />
      <ul className="user-card__details">
        <li className="user-card__email">
          <span>Email: </span>
          <span>{user.email}</span>
        </li>
        <li className="user-card__birthday">
          <span>Birthday: </span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <footer className="user-card__actions">
        <button className="user-card__delete-button" onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="user-card__edit-button" onClick={handleUpdate}>
          <i className="bx bx-edit"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
