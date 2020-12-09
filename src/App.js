import { useEffect, useState } from 'react';
import axios from './axios';

const App = () => {
  const [response, setResponse] = useState([]);
  useEffect(async () => {
    const res = await axios.get('?country=us');
    setResponse(res.data);
  }, []);

  console.log(response);
  return (
    <div>
      <h1 className="text-6xl">Top Headlines</h1>
    </div>
  );
};

export default App;
