import { useState } from 'react';
import useToggle from './useToggle';
const ToggleExample = () => {
  const {show,toggle} = useToggle(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {(show)?<h1>Some cool stuff</h1>:<h2>not so cool stuff</h2>}
    </div>
  );
};
export default ToggleExample;
