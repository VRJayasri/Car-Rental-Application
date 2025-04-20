const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jayasri12',
  database: 'users',
  port:3307
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Register API
app.post('/api/register', async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query('INSERT INTO user_credential (username, password, email) VALUES (?, ?, ?)',
    [username, hashedPassword, email],
    (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Username already exists!' });
        }
        return res.status(500).json({ message: 'Database error' });
      }
      res.json({ message: 'User registered successfully!' });
    });
});

// Login API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM user_credential WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(400).json({ message: 'User not found!' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: 'Incorrect password!' });

    res.json({ message: 'Login Successful!' });
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
