import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, toggleModal }) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUserById("/users", updateInfo.id, data);
      setUpdateInfo(null);
    } else {
      createNewUser("/users", data);
    }

    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: ""
    });

    toggleModal();
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(submit)}>
      <h2 className="user-form__header">{updateInfo ? "Update User" : "New User"}</h2>
      <div className="user-form__field">
        <label className="user-form__label" htmlFor="first_name">First Name</label>
        <input className="user-form__input" {...register("first_name")} type="text" id="first_name" />
      </div>
      <div className="user-form__field">
        <label className="user-form__label" htmlFor="last_name">Last Name</label>
        <input className="user-form__input" {...register("last_name")} type="text" id="last_name" />
      </div>
      <div className="user-form__field">
        <label className="user-form__label" htmlFor="email">Email</label>
        <input className="user-form__input" {...register("email")} type="email" id="email" />
      </div>
      <div className="user-form__field">
        <label className="user-form__label" htmlFor="password">Password</label>
        <input className="user-form__input" {...register("password")} type="password" id="password" />
      </div>
      <div className="user-form__field">
        <label className="user-form__label" htmlFor="birthday">Birthday</label>
        <input className="user-form__input" {...register("birthday")} type="date" id="birthday" />
      </div>
      <button className="user-form__button" type="submit">{updateInfo ? "Update this user" : "Add a new user"}</button>
    </form>
  );
};

export default FormUser;
