import Indexpage from './BookingWebsite/IndexPage/IndexPage';
import BookTicket from './BookingWebsite/BookTicket/BookTicket';
import ShowTicket from './BookingWebsite/BookTicket/ShowTicket';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//basename="/react-mysql-bus_booking_website/"
export default function App() {

  return(
    <BrowserRouter basename="/react-mysql-bus_booking_website/">
    <Routes>
      <Route path='/' element={<Indexpage />}></Route>
      <Route path='/Bookticket' element={<BookTicket />}></Route>
      <Route path='/ShowTicket' element={<ShowTicket />} />
    </Routes>   
    </BrowserRouter>
    
  );
}