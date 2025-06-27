import Indexpage from './BookingWebsite/IndexPage/IndexPage';
import BookTicket from './BookingWebsite/BookTicket/BookTicket';
import ShowTicket from './BookingWebsite/BookTicket/ShowTicket';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//basename="/React-MySql_Ticket_Booking_Website"

export default function App() {

  return(
    <BrowserRouter basename="/React-MySql_Ticket_Booking_Website">
    <Routes>
      <Route path='/' element={<Indexpage />}></Route>
      <Route path='/Bookticket' element={<BookTicket />}></Route>
      <Route path='/ShowTicket' element={<ShowTicket />} />
    </Routes>   
    </BrowserRouter>
    
  );
}
