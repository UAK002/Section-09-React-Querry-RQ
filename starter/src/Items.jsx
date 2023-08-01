import SingleItem from './SingleItem';

import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';

const Items = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      // const { data } = await customFetch.get('/something');
      const { data } = await customFetch.get('/');
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: '1rem' }}> There was an error...</p>;
  }
  // console.log(error);
  // if (isError) {
  //   return <p style={{ marginTop: '1rem' }}>{error.message}</p>;
  // }
  // if (isError) {
  //   return <p style={{ marginTop: '1rem' }}>{error.response.data}</p>;
  // }

  // console.log(data);

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
