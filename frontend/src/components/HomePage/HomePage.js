import './HomePage.css';
// import { useEffect } from 'react';
// import axios from 'axios';

const HomePage = () => {
  // const fetchApi = async () => {
  //   const { data } = await axios.get('/api/data');

  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  return (
    <div className="homepage">
      <h1>Ảo ma canada</h1>
      <div className="homepage__button">
        <a href="/login">
          <div className="button">Login</div>
        </a>
        <a href="/register">
          <div className="button">Register</div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
