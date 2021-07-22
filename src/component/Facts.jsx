import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Facts = () => {
  return (
    <>
      <div className="container mx-auto mt-4 flex border-8 border-green-500 border-opacity-30 shadow-lg md: flex-cols">
        <div className="mt-4">
          <ListGroup>
            <ListGroup.Item>
              <Link to="/happiness">
                <p className='text-xl text-gray-900 no-underline'>
                  સુખ વ્યક્તિલક્ષી છે. જ્યારે અન્ય લોકો કહે છે કે સફળતા, સંપત્તિ
                  અને સુંદરતા સુખ ખરેખર શું છે તે નિર્ધારિત કરતી નથી, કેટલાક
                  લોકો માટે, તે બધું છે જેની તેમને જરૂર છે..
                </p>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='/spritual'>
              <p className='text-xl text-black'>
                કોઈપણ આધ્યાત્મિક માર્ગનું ઉચ્ચતમ લક્ષ્ય એ શરણાગતિ છે. તેમ છતાં
                તમે શરણાગતિ શબ્દને હાર અથવા નબળાઇ સાથે જોડી શકો છો, તે સૌથી
                શક્તિશાળી આધ્યાત્મિક ક્રિયા છે.....
              </p>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='/depression'>
              <p className='text-xl text-black'>
              ડિપ્રેશન સામે લડવું:ઉદાસીનતા તમારી energyર્જાને ડ્રેઇન કરી શકે છે, તમને ખાલી અને થાકની લાગણી છોડશે. આ તાકાત અથવા સારવાર લેવાની ઇચ્છાને એકત્રિત કરવામાં મુશ્કેલ બનાવે છે.
              </p>
              </Link>
              
              </ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default Facts;
