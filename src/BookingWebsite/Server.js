import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const App = express();  
const port = 8080;

App.use(express.json());
App.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Karthiknvr2004',
  database: 'dummy',
});


db.connect((err) => {
  if (err) {
    console.log("Error Connecting to DB:", err.message);
  } else {
    console.log("✅ Connected To Database");
  }
});


App.get('/users', (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err.message);
      res.status(500).send("Database error");
    } else {
      res.json(results);
    }
  });
});


App.post('/users', (req, res) => {
  const { Name, busOperator, busType, sourceloc, desloc, departureDate, arrivaldate, total, TicketNo, SeatNo } = req.body;

  const sql = 'INSERT INTO users (name, operator_name, bus_type, source, destination, departure_date, arrival_date, price_per_seat, seatNo, ticketNo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [Name, busOperator, busType, sourceloc, desloc, departureDate, arrivaldate, total, TicketNo, SeatNo], (err, results) => {
    if (err) {
      console.error('Error Adding Ticket', err);
      res.status(500).send('Database error');
    } else {
      res.send({ message: 'Ticket Booked', id: results.insertId });
    }
  });
});



App.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM users WHERE PersonID = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting user:", err.message);
      res.status(500).send("Delete failed");
    } else {
      res.send({ message: 'Deleted successfully' });
    }
  });
});


App.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
