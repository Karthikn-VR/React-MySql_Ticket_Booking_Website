import logo from '../Images/RIDEZY.png';
import { Link } from 'react-router-dom';


export default function Footer(){
    return(
    <div className="container"> 
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
     <p className="col-md-4 mb-0 text-body-secondary">© 2025 Trip Bolt.</p>
      <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="Bootstrap"> 
        <img
              src={logo}
              alt="bus icon"
              width="90px"
              height="auto"
              className="d-flex"
              style={{marginTop:'-1rem',color:'white'}}
            />
      </a> 
    <ul className="nav col-md-4 justify-content-end"> 
        <li className="nav-item">
            <Link to='/' className="nav-link px-2 text-body-secondary">Home</Link>
        </li> 
        <li className="nav-item">
            <Link to='#About' className="nav-link px-2 text-body-secondary">About</Link>
        </li>
        <li className="nav-item">
            <Link to='#' className="nav-link px-2 text-body-secondary">Contact</Link>
        </li>
        <li className="nav-item">
            <Link href="#" className="nav-link px-2 text-body-secondary">FAQs</Link>
        </li>
       
    </ul>
    <p className='text-muted my-0 d-flex ms-auto'>Karthikn_VR</p>
   </footer>
</div>
);
}