import './Register.css';

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="Your Email" />
      <input type="password" placeholder="Your Password" />
      <input type="password" placeholder="Re-enter Password" />
      <div className="button">Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
};

export default Register;
