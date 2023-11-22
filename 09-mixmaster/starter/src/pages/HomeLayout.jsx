import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="page">
        <Outlet />
      </section>
    </div>
  );
};
