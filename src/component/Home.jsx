import React from "react";
import {Form} from "react-bootstrap";
import Facts from "./Facts";

const Home = () => {
  return (
    <>
      <div className="container mx-auto flex mt-4 ">
        <div className="container mt-4">
          <span className="text-xl ">Today Quotes</span>
          <br></br>
          <span className="text-base ">
            The Best Way To Get Started Is Quit Talking And Begin Doing
          </span>
        </div>
        <div>
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
        <div>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Home;
