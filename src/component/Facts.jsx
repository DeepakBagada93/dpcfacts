import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Facts = () => {
  return (
    <>
      <div className="container mx-auto mt-4 ">
          <Link to='/happiness'>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>સાચું સુખ</Card.Title>
            <Card.Text>
              સુખ વ્યક્તિલક્ષી છે. જ્યારે અન્ય લોકો કહે છે કે સફળતા, સંપત્તિ અને
              સુંદરતા સુખ ખરેખર શું છે તે નિર્ધારિત કરતી નથી, કેટલાક લોકો માટે,
              તે બધું છે જેની તેમને જરૂર છે
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </div>
    </>
  );
};

export default Facts;
