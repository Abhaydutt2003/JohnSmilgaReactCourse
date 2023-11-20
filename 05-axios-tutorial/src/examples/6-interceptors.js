import axios from 'axios';
import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

//const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try{
      const res = await authFetch('/react-store-products');
      console.log(res);
    }catch(error){
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
