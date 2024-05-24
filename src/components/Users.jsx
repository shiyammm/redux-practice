import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../slices/slice';

export const Users = () => {
  const users = useSelector((state) => state.usersInfo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      {users.map((usr, index) => (
        <ul key={index}>
          <li>{usr}</li>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </ul>
      ))}
    </div>
  );
};

export default Users;
