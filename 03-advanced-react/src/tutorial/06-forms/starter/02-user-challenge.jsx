import React, { useState } from 'react';
import { data } from "../../../data";

const UserChallenge = () => {
  const [users,addUser]  = useState(data);
  const  handleClick = (e)=>{
    e.preventDefault()
    console.log(e.target.name.value);
  }
  return (
    <div>
      <form className="form" onSubmit={handleClick}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {data.map((input,index) => {
        return (
          <React.Fragment key={index}>
            <h1>{index+1}</h1>
            <h2>{input.name}</h2>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default UserChallenge;
