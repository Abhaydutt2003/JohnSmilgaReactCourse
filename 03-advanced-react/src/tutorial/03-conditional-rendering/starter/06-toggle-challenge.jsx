import { useState } from "react";

const ToggleChallenge = () => {
  // const [click, setClick] = useState(false);
  // return (
  //   <div>
  //     {click ? <p>the click is true</p> : <p>the click is false</p>}
  //     <button onClick={() => setClick(!click)} type="button">
  //       {" "}
  //       click to change
  //     </button>
  //   </div>
  // );
  const [showAlert, setShowAlert] = useState(false);
  
  return (
    <div>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>;
};

export default ToggleChallenge;
