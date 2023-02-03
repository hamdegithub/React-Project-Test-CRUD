
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersRequest, createUserRequest, updateUserRequest, deleteUserRequest } from '../actions';
import { Button } from 'rebass'
import { css } from '@emotion/css'
const UserList = () => {
  const users = useSelector((state) => state.users);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const color = "white";
  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleUpdateUser = (id) => {
    dispatch(updateUserRequest(id));
  };


  const handleDeleteUser = (id) => {
    dispatch(deleteUserRequest(id));
  };


  return (
    <>

      <div className={css`
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin: 0 auto;
    display:  table;
  background-color:#eee;
  border:1px solid  #666666;
  border-spacing:5px;
    `}>
        <div className={css`
     display:table-row;
     width:auto;`}>
          <div className={css`float:left;
  display:table-column;
  width:170px;
  padding: 8px;
  background-color:#00B6CD;`} >Full Name</div>
          <div className={css`float:left;
  display:table-column;
  width:230px;
  padding: 8px;
  background-color:#00B6CD;`}>User Name</div>
          <div className={css`float:left;
  display:table-column;
  width:230px;
  padding: 8px;
  background-color:#00B6CD;`}>Eamil </div>
          <div className={css`float:left;
  display:table-column;
  width:230px;
  padding: 8px;
  background-color:#00B6CD;`} >Phone</div>
          <div className={css`float:left;
  display:table-column;
  width:230px;
  padding: 8px;
  background-color:#00B6CD;`}>Website</div>
        </div>

      </div>

      <div>

        {isEdit ? (
          <form onSubmit={handleUpdateUser}>
            <input placeholder="Name" name="name" defaultValue={users.name} />
            <input placeholder="UserName" name="username" defaultValue={users.username} />
            <input placeholder="Email" name="email" defaultValue={users.email} />
            <input placeholder="Phone" name="phone" defaultValue={users.phone} />
            <input placeholder="Website" name="website" defaultValue={users.website} />

            <Button className={css`
     background-color: #FE8402;
     cursor: pointer;
     &:hover {
       color: ${color};
     }
   `} >Save</Button>
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
      {users.map((user) => ( 
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
      `}>{user.name}</span>
                <span className={css`
         float:left;
         display:table-column;
         width:200px;
         background-color:#ccc;
         padding: 9px;
        }
      `} >{user.username}</span>
                <span className={css`
         float:left;
         display:table-column;
         width:200px;
         background-color:#ccc;
         padding: 9px;
        }
      `}>{user.email}</span>
                <span className={css`
         float:left;
         display:table-column;
         width:200px;
         background-color:#ccc;
         padding: 9px;
        }
      `}>{user.phone}</span>
                <span className={css`
        float:left;
        display:table-column;
        width:200px;
        background-color:#ccc;
        padding: 9px;
        }
      `}>{user.website}</span>
                <Button className={css`
         background-color: #00B6CD;;
         cursor: pointer;
         &:hover {
           color: ${color};
         }
       `} onClick={() => handleEdit(user.id)}>Edit</Button>
                <Button className={css`
         background-color: #EC4134;
         cursor: pointer;
         &:hover {
           color: ${color};
         }
       `} onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                
              </div>
      ))}
            
          </div>
        )}
      </div>
   

    </>
  );
};

export default UserList;
