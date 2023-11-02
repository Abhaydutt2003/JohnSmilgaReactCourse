import Person from './Person';
import { memo } from 'react';
const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default memo(List);
