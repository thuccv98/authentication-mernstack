import axios from 'axios';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import './Register.css';

const Register = ({ history }) => {
  // const [user, setUser] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const submitHandler = async () => {
    if (password !== confirmPassword) {
      setMessage('Password  Do not Match');
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            'Content-type': 'application/json',
          },
        };
        const { data } = await axios.post(
          '/api/users',
          { name, email, password },
          config
        );
        localStorage.setItem('userInfo', JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
      }
    }
    console.log(email);
  };

  return (
    <div className="register">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        // value={user.name}
        value={name}
        placeholder="Your Name"
        // onChange={handleChange}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="email"
        // value={user.email}
        value={email}
        placeholder="Your Email"
        // onChange={handleChange}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        // value={user.password}
        value={password}
        placeholder="Your Password"
        // onChange={handleChange}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        name="confirmPassword"
        // value={user.confirmPassword}
        value={confirmPassword}
        placeholder="Re-enter Password"
        // onChange={handleChange}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="button" onClick={submitHandler}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push('/login')}>
        Login
      </div>
    </div>
  );
};

export default Register;
