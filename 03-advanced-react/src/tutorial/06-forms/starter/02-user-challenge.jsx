import React, { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleClick = (event) => {
    event.preventDefault();
    if (!name) {
      return; //no user entered
    }
    const newUser = { id: Date.now(), name: name };
    const newUsers = [...users, newUser];
    setUsers(newUsers);
    setName("");
  };
  const deleteUser = (id)=>{
    const updatedUsers = users.filter((person)=>{
      return person.id!=id;
    })
    setUsers(updatedUsers);
  }

  return (
    <div>
      <form className="form" onSubmit={handleClick}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((input, index) => {
        return (
          <React.Fragment key={index}>
            <h1>{index + 1}</h1>
            <h2>{input.name}</h2>
            <button onClick={()=>deleteUser(input.id)}>Delete user</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default UserChallenge;
