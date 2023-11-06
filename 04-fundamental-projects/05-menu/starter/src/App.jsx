import { useRef, useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Catagories from "./assets/Catagories";

//no need to use useState for catagories
const allcatagories = ["all", ...new Set(data.map((item) => item.category))];

const url = "https://api.github.com/users";




const App = () => {
  const [menu, setMenu] = useState(data);

  const filterItems = (category) => {
    if (category == "all") {
      setMenu(data);
      return;
    }
    let newData = data.filter((item) => {
      return item.category == category;
    });
    setMenu(newData);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="title-underline"></div>
        </div>
        <Catagories allCat = {allcatagories} filterItems = {filterItems}></Catagories>
        <Menu items = {menu}></Menu>
      </section>
    </main>
  );
};
export default App;
