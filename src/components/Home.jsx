import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/slice';

const Home = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(name));
    setName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Home;
