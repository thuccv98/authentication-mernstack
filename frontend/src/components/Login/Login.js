import axios from 'axios';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import './Login.css';

const Login = ({ history }) => {
  const [error, setError] = useState(false);
  // const [user, setUser] = useState({
  //   email: '',
  //   password: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async () => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/users/login',
        {
          // user,
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      history.push('/mainscreen');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        // value={user.email}
        value={email}
        placeholder="Enter your Email"
        // onChange={handleChange}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        // value={user.password}
        value={password}
        placeholder="Enter your Password"
        // onChange={handleChange}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="button" onClick={submitHandler}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push('/register')}>
        Register
      </div>
    </div>
  );
};

export default Login;
