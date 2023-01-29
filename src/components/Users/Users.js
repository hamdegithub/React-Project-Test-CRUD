import React, { useState } from "react";
import {Button } from 'rebass'
import { css } from '@emotion/css'
export const User = ({ name,username, email,phone,website, id, onEdit, onDelete }) => {
 const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (e) => {
    e.preventDefault();
    onEdit(id, e.target.name.value,e.target.username.value,e.target.email.value,e.target.phone.value,e.target.website.value);
    setIsEdit(!isEdit);
  };
  const color="white";
  return (
    <div>
     
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" name="name" defaultValue={name} />
          <input placeholder="UserName" name="username" defaultValue={username} />
          <input placeholder="Email" name="email" defaultValue={email} />
          <input placeholder="Phone" name="phone" defaultValue={phone} />
          <input placeholder="Website" name="website" defaultValue={website} />
          
          <Button className={css`
      background-color: #FE8402;
      cursor: pointer;
      &:hover {
        color: ${color};
      }
    `}  onSubmit={handleOnEditSubmit}>Save</Button>
        </form>
      ) : (
       <div className={css`
       display: inline;
       width: 95%;
       justify-content: space-between;
       margin: 0 auto;
       display:  table;
      background-color:#eee;
      border:1px solid  #666666;
      border-spacing:5px;
       }
     `} >
         <div className={css`
       display:table-row;
       width:auto;
       }
     `}>
          <span className={css`
        float:left;
        display:table-column;
        width:200px;
        background-color:#ccc;
        padding: 9px;
       }
     `}>{name}</span>
          <span className={css`
        float:left;
        display:table-column;
        width:200px;
        background-color:#ccc;
        padding: 9px;
       }
     `} >{username}</span>
          <span  className={css`
        float:left;
        display:table-column;
        width:200px;
        background-color:#ccc;
        padding: 9px;
       }
     `}>{email}</span>
          <span className={css`
        float:left;
        display:table-column;
        width:200px;
        background-color:#ccc;
        padding: 9px;
       }
     `}>{phone}</span>
          <span className={css`
       float:left;
       display:table-column;
       width:200px;
       background-color:#ccc;
       padding: 9px;
       }
     `}>{website}</span>
          <Button className={css`
        background-color: #00B6CD;;
        cursor: pointer;
        &:hover {
          color: ${color};
        }
      `}  onClick={handleEdit}>Edit</Button>
          <Button className={css`
        background-color: #EC4134;
        cursor: pointer;
        &:hover {
          color: ${color};
        }
      `}  onClick={handleDelete}>Delete</Button>
          <div>
            
          </div>
        </div>
       </div>
      )}
    </div>
  );
};


