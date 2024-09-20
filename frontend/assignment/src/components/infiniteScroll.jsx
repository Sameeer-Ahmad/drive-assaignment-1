import { useState, useEffect } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

const InfiniteScroll = ({ renderData }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        
        const newData = response.data.slice((page - 1) * 10, page * 10);
        
        setData(prevData => [...prevData, ...newData]);
        setHasMore(newData.length > 0);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage(prevPage => prevPage + 1);
    }
  }, [inView]);

  return (
    <div>
      {renderData(data)}
      {hasMore && <div ref={ref} style={{ height: '20px' }} />}
    </div>
  );
};

export default InfiniteScroll;
