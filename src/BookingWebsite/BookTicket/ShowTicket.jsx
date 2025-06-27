import { useEffect, useState } from "react";
import UserTicket from "./UserTickets";
import { useLocation,Link } from "react-router-dom";

export default function ShowTicket(){

    const[Tickets , setTickets] = useState([]);
    const[loading , setloading] = useState(true);
    const location = useLocation();
    const deleteIndex = location.state?.deleteIndex;

    const fetchTickets = ()=>{
    fetch("http://localhost:8080/users")
    .then((res)=>res.json())
    .then((data)=>{
        setTickets(data)
        setloading(false)
    })
    }


const DeleteTickets = async (deleteIndex) => {
  
    try {
      const res = await fetch(`http://localhost:8080/users/${deleteIndex}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        console.log("Ticket Canceled!");
        fetchTickets();
       
        navigate('/show-ticket', { replace: true });
      } else {
        console.error("Failed to cancel. Status:", res.status);
      }
    } catch (err) {
      console.error("Error cancelling ticket:", err.message);
    }
  
};




     useEffect(()=>{
        if (deleteIndex !== undefined){
            DeleteTickets(deleteIndex)
        }
    },[deleteIndex])

    useEffect(()=>{
        fetchTickets()
    },[])



    return(
        <div>
            <div className="container-fluid border border-1 border-glow shadow-sm rounded mt-0 top-0 start-0 text-start">
              
            <div className="justify-content-start d-flex"><h3 className="p-2  border-bottom border-light shadow-bottom-lg mt-1">Your Tickets</h3>
            <Link to="/" className="btn btn-outline-dark-empisis ms-auto my-auto">Home</Link></div>
              <hr />
              <div className="container text-center">
               
                

                 {loading ? <p>Loading</p> : (
                    <div className="">
                      {Tickets && Tickets.length > 0 ? (
                       <UserTicket Datas = {Tickets} /> ) : (
                       <div className="text-center w-100 mt-5">
                      <h4 className="fw-bold text-muted">No tickets found</h4>
                      <p className="text-secondary">You haven’t booked any rides yet. Why not book your first ride now?</p>
                      <Link to="/Bookticket" className="btn p-2 m-5 btn-outline-warning fw-semibold">Book a Ride</Link>
                    </div>)}
                     </div>
                  )}
                 </div>
                 
                   </div>
                   
                </div>
           
        
    );
}