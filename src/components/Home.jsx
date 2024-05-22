import React, { useState } from 'react';

const Home = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <form>
      <label>name:</label>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={userData.firstName}
      />
      <br />
      <label>email:</label>
      <input
        name="email"
        type="text"
        onChange={handleChange}
        value={userData.secondName}
      />
      <br />
      <label>age:</label>
      <input
        name="age"
        type="text"
        onChange={handleChange}
        value={userData.age}
      />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default Home;
