import { useEffect, useRef, useState } from "react";

//if no effect to frontend use useref, basically no re-render
//preserves the value between renders
//and target dom nodes
const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  });

  let displayWho = useRef(0);

  const handleSubmit = (event) => {
    displayWho.current == 1 ? (displayWho.current = 0) : (displayWho.current = 1);
    event.preventDefault();
    // console.log(refContainer.current);
    const name = refContainer.current.value;
    console.log(name);
  };
  const couple = { husband: "Abhay", Wife: "Ankita" }
  const display = () => {
    if (displayWho.current == 1) {
      console.log(couple.Wife);
    } else {
      console.log(couple.husband);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
      <br/>
      <button onClick={display} className="btn">
        display
      </button>
    </div>
  );
};

export default UseRefBasics;
