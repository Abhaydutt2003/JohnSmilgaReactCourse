import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

const Duties = (props) => {
  const { duties } = props;
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
