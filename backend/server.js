const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3001; // Or any port you prefer

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Create a MySQL connection pool (more efficient than single connection)
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Jayasri12', // Replace with your actual password
    database: 'orders',
    port: 3307, // Replace with your MySQL port if different
    connectionLimit: 10,
});

// API endpoint to handle form submission (POST request)
app.post('/api/orders', (req, res) => {
    const orderData = req.body;

    // Validate data on the server (important for security)
    if (!orderData.name || !orderData.phone) {
        return res.status(400).json({ error: 'Name and phone are required' });
    }

    const query = `
        INSERT INTO orderuser (
            name, phone, area, city, pincode, state, carname, driver, 
            licencenumber, pickup_address, drop_address, days, pickup_date, 
            pickup_time, color, carbranch_name, msg
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    pool.query(
        query,
        [
            orderData.name, orderData.phone, orderData.area, orderData.city,
            orderData.pincode, orderData.state, orderData.fullcarname,
            orderData.driverChoice, orderData.licen, orderData.pick,
            orderData.drop, orderData.days, orderData.when, orderData.tym,
            orderData.clr, orderData.car, orderData.msg
        ],
        (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                return res.status(500).json({ error: 'Failed to save order' });
            }
            res.status(201).json({ message: 'Order created successfully!', orderId: result.insertId });
        }
    );
});

// API endpoint to get all orders (GET request)
app.get('/api/orders', (req, res) => {
    pool.query('SELECT * FROM orderuser', (err, results) => {
        if (err) {
            console.error('Error fetching orders:', err);
            return res.status(500).json({ error: 'Failed to fetch orders' });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});