import { useState } from "react";
import data from "./data";
import "./style.css";
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="cont">
      {people.map((person) => {
        const { image, name, age, id } = person;
        return (
          <div key={id}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                width: "40px",
                height: "40px",
                backgroundSize: "cover",
                borderRadius: "50px",
              }}
            ></div>
            <h3>{`${people.length} birthdays today`}</h3>
            <h3>{name}</h3>
            <h5>{age}</h5>
          </div>
        );
      })}
      <button className = 'btn' onClick={()=>setPeople([])}>clear all</button>
    </div>
  );
};
export default App;
