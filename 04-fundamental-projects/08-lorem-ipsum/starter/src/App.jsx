import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

//cannot map a particular portion of an array. instead use array.splice();
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  function handleSubmit(event){
    event.preventDefault();
    let amount = count;
    setText(data.slice(0,amount));
  }

  return (
    <section className="section-center">
      <h4>Tired of using boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          value={count}
          name="amount"
          min="1"
          step="1"
          max="8"
          onChange={(event) => setCount(event.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
        <article className="lorem-text">
          {text.map((item) => {
            return <p key={nanoid()}>{item}</p>;
          })}
        </article>
      </form>
    </section>
  );
};
export default App;
