//import { useQuery } from '@tanstack/react-query';
//import axios from 'axios';
//import customFetch from '../utils';
import SingleItem from '../../starter/src/SingleItem';
import { useFetchTasks } from '../reactQeryCustomHook';

const Items = ()=>{
  const {isLoading,isError,data} = useFetchTasks();
  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
  }
  if (isError) {
    return <p style={{ marginTop: '1rem ' }}>There was an error...</p>;
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Items;
// // import SingleItem from './SingleItem';
// const Items = ({ items }) => {
//   // const result = useQuery({
//   //   queryKey: ['tasks'],
//   //   queryFn:()=>customFetch.get('/')
//   // });
//   //console.log(result);
//   const {isLoading,data,error,isError} = useQuery({
//     queryKey:['tasks'],
//     queryFn:async()=>{
//       const {data} = await customFetch.get('/');
//       return data;
//     },
//   });
//   if (isLoading) {
//     return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
//   }
//   if (error) {
//     return <p style={{ marginTop: '1rem ' }}>{error.message}</p>;
//   }
//   return (
//     <div className='items'>
//       {data.taskList.map((item) => {
//         return <SingleItem key={item.id} item={item} />;
//       })}
//     </div>
//   );
//   // return (
//   //   // <div className='items'>
//   //   //   {items.map((item) => {
//   //   //     return <SingleItem key={item.id} item={item} />;
//   //   //   })}
//   //   // </div>
//   // );
// };
//export default Items;
