import React from "react";
import youtube from "../Images/youtube.png";
import whatapp from "../Images/whatsapp.png";
import instagram from "../Images/instagram.png";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto border-8 border-green-500 border-opacity-30 shadow-lg">
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form>

        <ul className="flex flex-row justify-center">
          <li className="px-3">
            <Link>
              <img className="w-10" alt="" src={youtube} />
            </Link>
          </li>
          <li className="px-3">
            <Link>
              <img className="w-10 " alt="" src={whatapp} />
            </Link>
          </li>
          <li className="px-3">
            <Link>
              <img className="w-10" alt="" src={instagram} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
