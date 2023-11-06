import MenuItem from "./MenuItem";

const Menu = (props) => {
  const { items } = props;
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem {...menuItem} key={menuItem.id}></MenuItem>;
      })}
    </div>
  );
};

export default Menu;
