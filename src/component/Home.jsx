import React from "react";

import Facts from "./Facts";

const Home = () => {
  return (
    <>
      <div className="container mx-auto flex mt-4 ">
        <div className="container mt-52 ">
          <span className="text-xl">Today Quotes</span>
          <br></br>
          <span className="text-base ">
            The Best Way To Get Started Is Quit Talking And Begin Doing
          </span>
        </div>
        <div className='mt-4 border-8 border-green-500 border-opacity-30'>
          <img
            className="border-2 rounded-2xl"
            src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto mt-20">
            <Facts/>
      </div>
      <div className=" flex justify-center mx-auto mt-10">
       
      </div>
    </>
  );
};

export default Home;
