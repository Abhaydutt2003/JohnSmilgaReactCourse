import Person from './Person';
//import {memo} from 'react';
const List = ({ people,removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} removePerson = {removePerson} {...person} />;
      })}
    </div>
  );
};
export default List;
