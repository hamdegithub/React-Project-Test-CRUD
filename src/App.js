import React, { useEffect, useState } from "react";
import { User } from "./components/Users/Users";
import { AddUser } from "./components/Adduser/Adduser";
import { css } from '@emotion/css'
export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  const onAdd = async (name, username,email,phone,website) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        phone: phone,
        website: website,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id,name, username,email,phone,website) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        phone: phone,
        website: website,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.username=username;
            user.email = email;
            user.phone=phone;
            user.website=website;
          }

          return user;
        });

        setUsers((users) => updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1 className={css`
      text-align: center`}>CRUD Test project React </h1>
      <AddUser onAdd={onAdd} />
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
       <div  className={css`float:left;
    display:table-column;
    width:230px;
    padding: 8px;
    background-color:#00B6CD;`}>User Name</div>
       <div  className={css`float:left;
    display:table-column;
    width:230px;
    padding: 8px;
    background-color:#00B6CD;`}>Eamil </div>
       <div className={css`float:left;
    display:table-column;
    width:230px;
    padding: 8px;
    background-color:#00B6CD;`} >Phone</div>
       <div  className={css`float:left;
    display:table-column;
    width:230px;
    padding: 8px;
    background-color:#00B6CD;`}>Website</div>
       </div>
      </div>
      
      {users.map((user) => (
        <User 
          id={user.id}
          key={user.id}
          name={user.name}
          username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}