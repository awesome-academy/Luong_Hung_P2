import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as authActions from "../../actions/auth";
import '../../sass/login.scss'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        return setEmail(event.target.value);
      case "password":
        return setPassword(event.target.value);
      default:
        return 0;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authActions.userLogin({ email, password }));
    props.history.push("/");
  };

  return (
    <form className='login' onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        name='email'
        placeholder='Email'
        id='email'
        value={email}
        onChange={handleChange}
      />
      <br />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        placeholder='Password'
        id='password'
        value={password}
        onChange={handleChange}
      />
      <br />

      <input type='submit' value='Login' />
    </form>
  );
};

export default Login;
