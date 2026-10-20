// Import the express module
import express from 'express';

// Create an instance of an
// express application
const app = express();

// Define a port number for
// our server to listen on
const PORT = 3000;

//create an array to store pizza orders
const orders = [];

// Enable static file serving
app.use(express.static('public'));

// Enable parsing of URL-encoded data
// Access form data using req.body
app.use(express.urlencoded({ extended: true }));

// Define a default route ("/")
app.get('/', (req, res) => {
    //res.send('Welcome to Poppa\'s Pizza');
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// add a contact route to display the contact page
app.get('/contact-us', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

// add a confirmed route to display the confirmed page
app.get('/confirm-order', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

// add a menu route to display the menu page
app.get('/menu', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/menu.html`);
});

// add a route to process the pizza order form submission
app.post('/submit-order', (req, res) => {
    const order = req.body;
    order['timestamp'] = new Date();

    console.log(order);
    orders.push(order);
    
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);


});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at 
        http://localhost:${PORT}`);
});

