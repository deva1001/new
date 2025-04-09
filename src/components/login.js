import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // ✅ Import SweetAlert2
import '../styles/style1.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const formType = queryParams.get('form');
    if (formType === 'signup') {
      toggleSignup();
    } else {
      toggleLogin();
    }
  }, [location.search]);

  const toggleSignup = () => {
    document.getElementById('login-toggle').style.backgroundColor = '#fff';
    document.getElementById('login-toggle').style.color = '#222';
    document.getElementById('signup-toggle').style.backgroundColor = '#57b846';
    document.getElementById('signup-toggle').style.color = '#fff';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  };

  const toggleLogin = () => {
    document.getElementById('login-toggle').style.backgroundColor = '#57B846';
    document.getElementById('login-toggle').style.color = '#fff';
    document.getElementById('signup-toggle').style.backgroundColor = '#fff';
    document.getElementById('signup-toggle').style.color = '#222';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/HeightAndWeight');
  };

  const handleSignup = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'You can login now.',
      confirmButtonText: 'OK',
    }).then(() => {
      navigate('/login');
    });
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/home1">
          <button className="back-button">&#8592; Back</button>
        </Link>
      </div>

      <div className="form-modal">
        <div className="form-toggle">
          <button id="login-toggle" onClick={toggleLogin}>log in</button>
          <button id="signup-toggle" onClick={toggleSignup}>sign up</button>
        </div>

        <div id="login-form">
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Enter email or username" required />
            <input type="password" placeholder="Enter password" required />
            <button type="submit" className="btn login">login</button>
            <p><a href="#">Forgotten account</a></p>
            <hr />
          </form>
        </div>

        <div id="signup-form">
          <form onSubmit={handleSignup}>
            <input type="email" placeholder="Enter your email" required />
            <input type="text" placeholder="Choose username" required />
            <input type="password" placeholder="Create password" required />
            <button type="submit" className="btn signup">create account</button>
            <p>
              Clicking <strong>create account</strong> means that you agree to our <a href="#">terms of services</a>.
            </p>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
