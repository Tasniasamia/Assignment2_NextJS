"use client"
import axios from 'axios';
import React from 'react';

const Delete = ({ data }) => {
  

const handleData = async () => {
    const response = await axios.delete(`/api/user/?id=${data.id}`);
    console.log(response);
    }

  return (
    <div onClick={handleData}>
      <button className='btn btn-primary'>Delete</button>
    </div>
  );
};

export default Delete;
