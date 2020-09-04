import React, { useState } from "react";
import * as authActions from "../../actions/auth";
import { useDispatch } from "react-redux";
import '../../sass/register.scss'

const Register = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        return setName(event.target.value);
      case "phone":
        return setPhone(event.target.value);
      case "email":
        return setEmail(event.target.value);
      case "password":
        return setPassword(event.target.value);
      case "region":
        return setRegion(event.target.value);
      case "birth":
        return setBirth(event.target.value);
      case "gender":
        return setGender(event.target.value);
      default:
        return 0;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      authActions.userRegister({
        name,
        phone,
        email,
        password,
        region,
        birth,
        gender,
      })
    );
    props.history.push("/");
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        name='name'
        placeholder='Name'
        type='text'
        id='name'
        value={name}
        onChange={handleChange}
      />
      <br />

      <label htmlFor='phone'>Phone</label>
      <input
        name='phone'
        placeholder='Phone'
        value={phone}
        type='text'
        id='phone'
        onChange={handleChange}
      />
      <br />

      <label htmlFor='email'>Email</label>
      <input
        name='email'
        placeholder='Email'
        value={email}
        type='text'
        id='email'
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

      <label htmlFor='region'>Region</label>
      <input
        name='region'
        placeholder='Region'
        value={region}
        type='text'
        id='region'
        onChange={handleChange}
      />
      <br />

      <label htmlFor='birth'>Date of birth</label>
      <input
        name='birth'
        placeholder='Date of birth'
        value={birth}
        type='date'
        id='birth'
        onChange={handleChange}
      />
      <br />

      <label htmlFor="Male">Gender</label>
      <label htmlFor="Male" className="gender">
        <input
          name='gender'
          type='radio'
          value='Male'
          id="Male"
          checked={gender === "Male"}
          onChange={handleChange}
        /> Male
      </label>
      <br />
      <label htmlFor="Female" className="gender">
        <input
          name='gender'
          type='radio'
          value='Female'
          id="Female"
          onChange={handleChange}
        /> Female
      </label>
      <br />

      <input type='submit' value='Register' />
    </form>
  );
};

export default Register;
