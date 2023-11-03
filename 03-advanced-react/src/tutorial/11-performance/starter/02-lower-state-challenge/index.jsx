import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Form from './Form';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name:name };
    setPeople([...people, newPerson]);
  };


  const removePerson = (id)=>{
    const newPeople = people.filter((person)=>{
      return person.id != id;
    })
    setPeople(newPeople);
  }//can use context api for this...


  return (
    <section>
      <Form addPerson={addPerson}></Form>
      <List people={people} removePerson = {removePerson} />
    </section>
  );
};
export default LowerStateChallenge;

//import React, { useCallback, useState } from 'react';

// function MyComponent() {
//   const [data, setData] = useState([]);
//   const handleClick = useCallback(() => {
//     console.log(data);
//   }, [data]);

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default MyComponent;