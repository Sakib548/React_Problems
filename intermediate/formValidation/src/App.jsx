import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const defaultData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(defaultData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validation = () => {
    const newError = {};
    if (!formData.name) newError.name = "Name is required";
    if (!formData.email) newError.email = "Email is required";
    if (!formData.password) newError.password = "Password is required";
    if (!formData.email.includes("@")) {
      newError.email = "Please enter a valid email address";
    }
    if (formData.password.length < 6) {
      newError.password = "Please enter a password of 6 or more characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = "Please enter the same password";
    }

    return newError;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validation();
    if (Object.keys(validate).length === 0) {
      setFormData(defaultData);
      setErrors({});
    } else {
      setErrors(validate);
    }
    console.log(errors);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        {errors.name ? <p className="error">{errors.name}</p> : ""}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email ? <p className="error">{errors.email}</p> : ""}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        {errors.password ? <p className="error">{errors.password}</p> : ""}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <br />
        {errors.confirmPassword ? (
          <p className="error">{errors.confirmPassword}</p>
        ) : (
          ""
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
