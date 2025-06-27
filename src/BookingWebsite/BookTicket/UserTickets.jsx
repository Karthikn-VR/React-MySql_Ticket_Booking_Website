import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function UserTicket({ Datas }) {
  const navigate = useNavigate();

  const handleDelete = (PersonID) => {
    navigate('/ShowTicket', { state: { deleteIndex : PersonID } });
  };

  return (
    <div className="container-fluid p-4 bg-gradient">
  <div className="row g-4">
    {Datas.map((Data, index) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex" key={index}>
        <div
          className="ticket-card bg-white rounded-4 shadow p-4 position-relative d-flex flex-column w-100 h-100"
          style={{ minHeight: '500px' }} 
        >
  
          <div className="d-flex align-items-center mb-4">
            <img
              src={`https://ui-avatars.com/api/?name=${Data.name}&background=3b3b3b&color=fff&rounded=true&size=64`}
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: '60px', height: '60px' }}
            />
            <div>
              <h5 className="mb-0 fw-bold">{Data.name}</h5>
              <small className="text-muted">Passenger</small>
            </div>
          </div>

  
          <div className="border rounded-3 p-3 mb-3 bg-light">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0 fw-bold">{Data.source}</h6>
              <div className="text-dark fs-4">
                <i className="bi bi-bus-front"></i>
              </div>
              <h6 className="mb-0 fw-bold">{Data.destination}</h6>
            </div>
            <div className="d-flex justify-content-between text-center mt-3">
              <div>
                <small className="text-muted">Departure</small><br />
                <span className="fw-semibold">{Data.departure_date?.slice(0, 10)}</span>
              </div>
              <div>
                <small className="text-muted">Arrival</small><br />
                <span className="fw-semibold">{Data.arrival_date?.slice(0, 10)}</span>
              </div>
            </div>
          </div>

         
          <div className="row text-center text-md-start mb-4">
            <div className="col-6">
              <small className="text-muted">Bus Operator</small><br />
              <span className="text-primary fw-bold">{Data.operator_name}</span>
            </div>
            <div className="col-6">
              <small className="text-muted">Bus Type</small><br />
              <span className="text-primary fw-bold">{Data.bus_type}</span>
            </div>
            <div className="col-6 mt-3">
              <small className="text-muted">Ticket No.</small><br />
              <span className="text-primary fw-bold">{Data.ticketNo || 'N/A'}</span>
            </div>
            <div className="col-6 mt-3">
              <small className="text-muted">Passengers</small><br />
              <span className="fw-bold">1</span>
            </div>
            <div className="col-12 mt-3">
              <small className="text-muted">Seat No.</small><br />
              <span className="fw-bold">{Data.seatNo || 'N/A'}</span>
            </div>
            <div className="col-12 mt-3">
              <small className="text-muted">Price</small><br />
              <span className="fw-bold">{Data.price_per_seat}</span>
            </div>
          </div>

          
          <div className="text-center mt-auto">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(Data.PersonID)}
            >
              Cancel Ride
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    
  );
}
