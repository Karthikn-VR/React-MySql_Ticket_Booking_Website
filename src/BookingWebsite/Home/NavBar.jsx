import {Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../Images/RIDEZY.png';
export default function NavBar(){


    return(
        <>
             <Navbar expand="lg" bg="transparent" className="px-4 pt-3 container-fluid"
              style={{
            background: 'rgba(0, 0, 9, 0.6)',
            color: 'white',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(1px)',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            borderRadius: '0 0 8px 8px'
          }}>
  <Navbar.Brand href="#" className="d-flex">
    <img
      src={logo}
      alt="bus icon"
      width="75px"
      height="auto"
      className="d-flex"
      style={{marginTop:'-1rem',color:'white'}}
    /><h3 className='fw-bold text-light text fs-3 ' style={{marginLeft:'4px',marginTop:'5px',filter:'drop-shadow(0px 0px 15px rgb(43, 41, 41))'}}>Trip Bolt</h3>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-white" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="/" className="text-light fw-medium mx-2">Home</Nav.Link>
      <Nav.Link href="#About" className="text-light fw-medium mx-2">About Us</Nav.Link>
      <Nav.Link href="#Contact" className="text-light fw-medium mx-2">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<hr className="border-white opacity-50 my-0" />
</>
    );
}