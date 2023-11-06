import { useEffect, useState } from "react";

import BtnContainer from "./assets/BtnContainer";
import JobInfo from "./assets/JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const resData = await response.json();
      setData(resData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  } else {
    return (
      <section className="jobs-center">
        <BtnContainer
          jobs={data}
          currentItem={current}
          setCurrentItem={setCurrent}
        ></BtnContainer>
        <JobInfo jobs={data} currentItem={current}></JobInfo>
      </section>
    );
  }
};
export default App;
