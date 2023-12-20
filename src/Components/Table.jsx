import axios from 'axios';
import React from 'react';
import Delete from './Delete';

const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/user'); // Replace with your actual server URL
    const data = await response.json();
        console.log(data);
    return { data: data };
  };
  
const Table = async() => {
    const dataAll=await fetchData();
    const data=dataAll.data.data;
    console.log(dataAll.data.data);
    return (
        <div  className='mx-[120px] mt-[40px]'>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Age</th>
        <th>Grade</th>
        <th>Course</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
  data.map((item, index) => {
    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{item.first_name}</td>
        <td>{item.Last_name}</td>
        <td>{item.age}</td>
        <td>{item.grade}</td>
        <td>{item.courses}</td>
        <td><Delete data={item}/></td>
        <td>Update</td>
      </tr>
    );
  })
}

      {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
     
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default Table;