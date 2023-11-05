import { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const App = () => {
  const [index,setIndex]  = useState(0);
  let {id,name,job,image,text} = reviews[index];
  //function to fetch a random person

  const randomPerson = ()=>{
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if(randomNumber === index){
      randomNumber = (randomNumber+1)%reviews.length;
    }
    setIndex(randomNumber);
  }


  return (
    <article className='review'> 
    <div className = 'cont'>
    <div className='img-container'>
    <img src={image} alt={name} className='person-img' />
    <span className='quote-icon'>
            <FaQuoteRight />
          </span>
    </div>
    <h2 className='author'>{name}</h2>
    <h3 className='job'>{job}</h3>
    <p className='info'>
      {text}
    </p>
    <button className = 'prev-btn' onClick={()=> setIndex(((index+1)%reviews.length))}><FaChevronLeft /></button>
    <button className= 'next-btn' onClick={()=> setIndex(((index-1+reviews.length)%reviews.length))}><FaChevronRight /></button>
    <button onClick={randomPerson}>suprise me</button>

    </div>
    </article>
  );
};
export default App;
