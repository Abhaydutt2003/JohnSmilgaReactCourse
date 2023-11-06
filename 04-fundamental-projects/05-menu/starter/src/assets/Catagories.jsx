const Catagories = (props) => {
  const { allCat, filterItems } = props;
  return (
    <div className="btn-container">
      {allCat.map((category) => {
        return <button
          type="button"
          key={category}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>;
      })}
    </div>
  );
};
export default Catagories;
