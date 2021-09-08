import './HomePage.css';
import { useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const fetchApi = async () => {
    const { data } = await axios.get('/api/data');

    console.log(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="homepage">
      <h1>Hello homepage</h1>
      <div className="button">Logout</div>
    </div>
  );
};

export default HomePage;
