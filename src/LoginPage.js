import React, { useState } from 'react';
import './loginpage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const loginHandle = (e) => {
    e.preventDefault();
    navigate("/landing");
  };

  return (
    <div className="loginpage">
      <div className="background"></div>
      <form onSubmit={loginHandle}>
        <h1>Login</h1>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" placeholder="Enter your Username" required/>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" placeholder="Enter your Password" required/>
        <input type="submit" className="fadeIn fourth" id="submit" value="Log In"/>
      </form>
    </div>
  );
}

export default LoginPage;

