// Import required modules
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(session({
    secret: 'secret_key', // Replace with a secure key in production
    //resave: false,
    saveUninitialized: true
}));

// Connect to MySQL Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456', // Replace with your MySQL password
    database: 'kasif'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL');
});

// Routes
// Serve homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'front.html'));
});

// Sign-up route
app.post('/contact', (req, res) => {
    const { Name, Email, Message } = req.body;

    if (password !== confirmPassword) {
        return res.send('Passwords do not match');
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).send('Error hashing password.');

        const sql = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
        db.query(sql, [Name, Email, Message], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.send('Email already registered. <a href="/signup">Try again</a>');
                } else {
                    res.status(500).send('Server error.');
                }
            } else {
                res.send('Sign-up successful! <a href="/login">Log in</a>');
            }
        });
    });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).send('Server error.');

        if (results.length === 0) {
            return res.send('User not found. <a href="/signup">Sign up</a>');
        }

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).send('Error comparing passwords.');

            if (!isMatch) {
                return res.send('Incorrect password.');
            }

            req.session.userId = user.id;
            res.redirect('/dashboard');
        });
    });
});

// Dashboard route
app.get('/dashboard', (req, res) => {
    if (!req.session.userId) return res.redirect('/login');
    res.send('<h1>Welcome to your Dashboard</h1><a href="/logout">Logout</a>');
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
