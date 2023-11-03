import { useCallback, useMemo, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import slowFunction from './slowFunction';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  //useMemo to make sure the value is rendered only once
  const value = useMemo(()=>slowFunction(),[]);
  console.log(value);
  
  //useCallback to make sure the the function 
  const removePerson = useCallback(
    (id)=>{
      console.log(people);
      const newPeople = people.filter((person)=>{
        return person.id != id;
      })
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson = {removePerson}/>
    </section>
  );
};
export default LowerState;
