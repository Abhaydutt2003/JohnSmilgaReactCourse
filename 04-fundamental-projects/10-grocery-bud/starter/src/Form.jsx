import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem == "") {
      toast.error("please enter a name first");
      return;
    }
    addItem(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>to-do-List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        ></input>
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;