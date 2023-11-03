import Item from './Person';

const List = ({ people,removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} removePerson = {removePerson} {...person} />;
      })}
    </div>
  );
};
export default List;
