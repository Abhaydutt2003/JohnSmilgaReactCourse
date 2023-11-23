import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isloading = navigation.state == "loading";
  const value = "some-value";
  return (
    <div>
      <Navbar></Navbar>
      <section className="page">
        {isloading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ value }}></Outlet>
        )}
      </section>
    </div>
  );
};
