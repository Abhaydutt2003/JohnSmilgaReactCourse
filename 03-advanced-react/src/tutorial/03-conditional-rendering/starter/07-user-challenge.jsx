import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      {!user ? (
        <div>
          <p>Please login</p>
          <button type="button" onClick={()=>setUser({name:'Ankita Goyal'})} className="btn">
            Login
          </button>
        </div>
      ) : (
        <div>
          <h1>{user.name}</h1>
          <p>Logout?</p>
          <button type="button" onClick={()=>setUser(null)} className="btn">
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
