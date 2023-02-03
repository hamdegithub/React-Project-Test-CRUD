// components/UserForm.js
import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'rebass';
import { createUserRequest, updateUserRequest } from '../actions';

const UserForm = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website:'',
  });
  const selectedUser = useSelector((state) => state.selectedUser);
  const dispatch = useDispatch();
 const color ="white"
  useEffect(() => {
    createUserRequest(selectedUser || { name: '', username: '', email: '',phone: '',website:'' });
  }, [selectedUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedUser) {
      dispatch(updateUserRequest(user));
    } else {
      dispatch(createUserRequest(user));
    }
    setUser({  name: '', username: '', email: '' ,phone: '',website:'' });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (<>
    <h1 className={css`
    text-align: center`}>CRUD Test project React </h1>
    <h3 className={css`
    text-align: center`}> Add User </h3>
    <form className={css`
    text-align: center`} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
          <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
       type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      /> 
      <input
       type="tel"
        name="phone"
        value={user.phones}
        onChange={handleChange}
        placeholder="Phone"
      /> 
       
      <input
        type="url"
        name="website"
        value={user.website}
        onChange={handleChange}
        placeholder="website"
      />
      <br/>
      <Button type="submit" className={css`
      background-color: #FE8402;
      cursor: pointer;
      &:hover {
        color: ${color};
      }
    `} >Add</Button>
    </form>
    </>
  );
};

export default UserForm;

