import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";


export default ({searchTerm}) => {
  const isSubmitting = useNavigation().state == "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};
