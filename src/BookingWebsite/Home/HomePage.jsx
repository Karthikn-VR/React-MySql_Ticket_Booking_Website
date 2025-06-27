import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

import Home from '../Images/Home.png'
import { Link } from 'react-router-dom';
import logo from '../Images/RIDEZY.png';
import HomeText from './HomeText';
import NavBar from './NavBar';

const HomePage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 300); 
  }, []);

  return (
    <div
      className="text-white"
      style={{
        backgroundImage: `url(${Home})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        overflow:'hidden'
      }}
    >
      <NavBar />
      
      
      <Container className="d-flex flex-column justify-content-center align-items-start h-100 my-0">
        <div
          className={`transition-opacity ${
            showText ? 'opacity-100' : 'opacity-100'
          }` }
          style={{ transition: 'opacity 1s ease-in-out' , marginTop:'-9rem'}}
        >
          <h1 className="display-4 fw-bold text-shadow " style={{fontSize:'100px'}}><HomeText /> </h1>
          <p className="lead text-light fw-medium">
            From city lights to mountain sights<br />ride with us
          </p>
          <div className="mt-4 d-flex flex-wrap gap-3">
           <Button
          variant="light"
          className="rounded-pill btn-lg px-4 py-2 fw-semibold text-dark"
          href="#Explore"
          style={{padding:'10px',width:'160px'}}
        >
          Explore
        </Button>

        <Button
          variant="warning"
          className="rounded-pill btn-lg px-4 py-2 fw-semibold text-dark"
          href="/Bookticket"
          style={{width:'160px'}}
        >
          Book Ride!
        </Button>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
