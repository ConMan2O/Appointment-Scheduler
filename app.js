import express from 'express';

const app = express();

const PORT = 3003;

const appointments = [];

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.post('/submit', (req, res) => {
    const data = req.body;
    appointments['timestamp'] = new Date();

    console.log(data);

    formdata.push(data);
    console.log(appointments);

    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});