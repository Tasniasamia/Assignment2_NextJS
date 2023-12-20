"use client"
import axios from 'axios';
import React from 'react';

const ResisterForm = () => {


    const handleData = async (e) => {
        e.preventDefault();
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const ageInt= e.target.age.value;
        const age=parseInt(ageInt)
        const grade = e.target.grade.value;
        const course = e.target.course.value;
      
        const data = {
          first_name: fname,
          Last_name: lname,
          age: age,
          grade: grade,
          courses: course,
        };
      
        try {
          const rawResponse = await axios.post('/api/user', data);
      
          if (rawResponse.data) {
            console.log('Server response data:', rawResponse.data);
          } else {
            console.log('Server response does not contain data property:', rawResponse);
          }
      
          console.log('Form Info', data);
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };
      
    return (
        <div className=" lg:w-[50%] w-full mt-[50px] mx-auto bg-base-100">
        <div className=" flex-col lg:flex-row-reverse">
       
          <div className="card  w-full  shadow-2xl bg-base-100">
            <h1 className='text-center text-4xl font-bold mt-[10px]'>Resister Form</h1>
            <form className="card-body" onSubmit={handleData}>
                <div className='flex gap-3 justify-center'>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" placeholder="First Name"name="fname"id="fname" className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="text" placeholder="Last Name"name="lname"id="lname" className="input input-bordered" required />
               </div>
               </div>
               <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input type="text" placeholder="Age"name="age"id="age" className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Grade</span>
                </label>
                <input type="text" placeholder="Grade"name="grade"id="grade" className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Courses</span>
                </label>
                <input type="text" placeholder="Courses"name="course"id="course" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Resister</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ResisterForm;