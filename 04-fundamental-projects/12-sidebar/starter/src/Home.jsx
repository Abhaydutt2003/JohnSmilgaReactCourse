import { useGlobalContext } from "./constext";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars></FaBars>
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};
export default Home;
