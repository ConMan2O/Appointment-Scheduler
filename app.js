import express from 'express';

const app = express();

const PORT = 3003;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})