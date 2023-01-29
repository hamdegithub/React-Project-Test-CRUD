import React from "react";
import { css } from '@emotion/css'
import { Button } from "rebass";
export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value,e.target.username.value,e.target.email.value,e.target.phone.value,e.target.website.value);
    
  };

  const color = 'white'

  return (
    <form className={css`
    text-align: center;`} onSubmit={handleOnSubmit}>
       <h3 >Add User</h3>
      <div className="input__users">
       <input type="text" placeholder="Full Name" name="name" />
        <input placeholder="User Name" name="username" />
        <input type="email" placeholder="Email" name="email" />
        <input type="tel" placeholder="Phone" name="phone" />
        <input type="url" placeholder="Website" name="website" />
      </div>     
       <Button  className={css`
      background-color: #FE8402;
      cursor: pointer;
      &:hover {
        color: ${color};
      }
    `} onSubmit={handleOnSubmit}>Add</Button>
      <hr />
    </form>
  );
};