import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");
  const handleShipping = (event)=>{
    console.log(event.target.checked);
    setShipping(event.target.checked);
  }
  const handelFramework = (event)=>{
    console.log(framework);
    setFramework(event.target.value);
  }
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        <div className="form-row" style={{ textAlign: "left" }}>
          <input
            type='checkbox'
            checked={shipping}
            id='shipping'
            name='shipping'
            onChange={handleShipping}
          />
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select name="framework" id="framework" onChange={handelFramework}>
            {frameworks.map((framework) => {
              return <option key={framework}> {framework} </option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
