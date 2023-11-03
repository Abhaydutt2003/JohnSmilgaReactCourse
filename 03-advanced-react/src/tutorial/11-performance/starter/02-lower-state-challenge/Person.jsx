//import {memo} from 'react';

const Person = ({ name,removePerson,id }) => {
  console.log(removePerson);
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={()=>removePerson(id)}>Remove Person</button>
    </div>
  );
};
export default Person;
