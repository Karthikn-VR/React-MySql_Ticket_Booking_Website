import React, { useState, useEffect } from 'react';
import { Calendar3, GeoAlt, Clock, Ban } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate , Link } from 'react-router-dom';

import FormImg from '../Images/FormImg.jpg';
import HomeBus from '../Images/HomeBus.png';


const BookTicket = () => {
  const [Name, setName] = useState("");
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [sourceloc, setSource] = useState("");
  const [desloc, setdes] = useState("");
  const [ret, setret] = useState(false);
  const [fare, setfare] = useState(0);
  const [arrivaldate, setarrivaldate] = useState("");
  const [busType, setBusType] = useState("");
  const [busOperator, setBusOperator] = useState("");
  const [msg, setMsg] = useState("");
   
  const navigate = useNavigate();
  const taxes = 80;
  const convenience = 599;
  const basefare = fare;
  const totalFare = basefare * passengers * (ret ? 2 : 1);
  const total = parseFloat((totalFare + taxes + convenience).toFixed(2));

  const getDateAfterDays = (dateStr, daysToAdd) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "";
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    setarrivaldate(getDateAfterDays(departureDate, 2));
  }, [departureDate]);

  function generateRandomAlphaNumeric(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  }

  useEffect(() => {
    switch (desloc) {
      case 'Delhi': case 'Chennai': setfare(2500); break;
      case 'Jammu': case 'Manali': case 'Madurai': setfare(3000); break;
      case 'Srinagar': case 'Coimbatore': setfare(3500); break;
      case 'Shimla': case 'Ooty': setfare(2500); break;
      case 'Amritsar': case 'Rishikesh': case 'Bangalore': setfare(3400); break;
      case 'Ahmedabad': case 'Kodaikanal': setfare(3700); break;
      default: setfare(0);
    }
  }, [desloc]);

  const Sourcelocations = ['Chennai', 'Madurai', 'Coimbatore', 'Ooty', 'Kodaikanal', 'Bangalore','Delhi', 'Jammu', 'Srinagar', 'Shimla', 'Manali', 'Amritsar', 'Ahmedabad', 'Rishikesh'];
  const deslocations = ['Delhi', 'Jammu', 'Srinagar', 'Shimla', 'Manali', 'Amritsar', 'Ahmedabad', 'Rishikesh','Chennai', 'Madurai', 'Coimbatore', 'Ooty', 'Kodaikanal'];
  const BusTypes = ['Ac Sleeper', 'Non-Ac Sleeper', 'Ac Seater', 'Non-Ac Seater'];
  const busOperators = ['GreenLine Travels', 'KPN Travels', 'SRS Travels', 'Parveen Travels', 'Orange Tours', 'VRL Travels', 'SRM Transports'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const TicketNo = generateRandomAlphaNumeric(8);
    const SeatNo = generateRandomAlphaNumeric(2);
    const res = await fetch("http://localhost:8080/users", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Name, busOperator, busType, sourceloc, desloc, departureDate, arrivaldate, total, TicketNo, SeatNo })
    });
    const data = await res.json();
    setMsg(res.ok ? `✅ Ticket Booked! Your ID: ${data.id}` : '❌ Error booking');
  };

  return (
    <div style={{
      backgroundImage: `url(${HomeBus})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '3rem 1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden'
    }}>
      
      <div className="col-lg-8 col-md-10 col-sm-12">
         <div
          className="p-4 shadow rounded shadow-lg"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            backdropFilter: 'blur(1px)',
            WebkitBackdropFilter: 'blur(1px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '0 0 8px 8px'
          }}
        >
          <h4 className="fw-bold mb-4 text-white text-center">Book Your Bus Ticket</h4>
          <button 
           className='btn btn-outline-light btn-sm ms-auto d-flex position-absolute end-0 top-0 m-3'
           onClick={()=> navigate('/ShowTicket')}>Your Tickets</button>
          
          <form onSubmit={handleSubmit}>
  <div className="row">
 
    <div className="col-lg-6">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" value={Name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">From</label>
          <select className="form-select" value={sourceloc} onChange={(e) => setSource(e.target.value)} required>
            <option value="">Select Source</option>
            {Sourcelocations.map((source, idx) => (
              <option key={idx} value={source} disabled={source === desloc}>{source}</option>
            ))}
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">To</label>
          <select className="form-select" value={desloc} onChange={(e) => setdes(e.target.value)} required>
            <option value="">Select Destination</option>
            {deslocations.map((des, idx) => (
              <option key={idx} value={des} disabled={des === sourceloc}>{des}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Bus Operator</label>
        <select className="form-select" value={busOperator} onChange={(e) => setBusOperator(e.target.value)} required>
          <option value="">Available Buses</option>
          {busOperators.map((op, idx) => (
            <option key={idx} value={op}>{op}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Bus Type</label>
        <select className="form-select" value={busType} onChange={(e) => setBusType(e.target.value)} required>
          <option value="">Select Bus Type</option>
          {BusTypes.map((bt, idx) => (
            <option key={idx} value={bt}>{bt}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Passengers</label>
        <input type="number" className="form-control" value={passengers} onChange={(e) => setPassengers(parseInt(e.target.value))} min={1} max={10} />
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="col-lg-6">
      <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Departure Date</label>
                <div className="input-group">
                  <span className="input-group-text"><Calendar3 /></span>
                  <input type="date" className="form-control" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} min={new Date().toISOString().split("T")[0]} required />
                </div>
                </div>
              

      {ret && (
                <div className="col-md-6 mb-3">
                  <label className="form-label">Return Date</label>
                  <div className="input-group">
                    <span className="input-group-text"><Calendar3 /></span>
                    <input type="date" className="form-control" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} min={arrivaldate || departureDate || new Date().toISOString().split("T")[0]} required />
                  </div>
                </div>
              )}
              </div>
              

      <button className="btn btn-sm btn-light mb-3 rounded-pill" type="button" onClick={() => setret(!ret)}>Need Return?</button>

      <div className="mb-3">
        <label className="form-label">Promo Code</label>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Enter Code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
          <button className="btn btn-outline-light">Apply</button>
        </div>
      </div>

      {sourceloc && desloc && (
        <div className="mb-3 bg-light p-3 rounded text-dark">
          <h6 className="fw-bold">Price Details</h6>
          <div className="d-flex justify-content-between"><span>Base Fare</span><span>₹{totalFare}</span></div>
          <div className="d-flex justify-content-between"><span>Convenience Fee</span><span>₹{convenience}</span></div>
          <div className="d-flex justify-content-between"><span>Taxes</span><span>₹{taxes}</span></div>
          <hr />
          <div className="d-flex justify-content-between fw-bold fs-5"><span>Total</span><span>₹{total}</span></div>
        </div>
      )}
    </div>
  </div>

  <button
    className="btn w-100 py-2 rounded fw-bold"
    style={{ backgroundColor: '#ffc107', color: '#000', border: 'none' }}
    type="submit"
  >
    Book Buses!
  </button>
  <p className="text-light mt-2 p-2 ms-auto d-flex">
    Go Back to <Link to="/" className="text-reset mx-2">Home</Link>
  </p>

  <div className="text-success fw-semibold mt-3">{msg}</div>
</form>

        </div>
      </div>
    </div>
  );
};

export default BookTicket;
