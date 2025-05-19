// index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Prosty endpoint do testów
app.get('/', (req, res) => {
  res.send('CometJet backend działa!');
});

// Przykładowy endpoint formularza kontaktowego
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Otrzymano wiadomość:', name, email, message);
  // Tutaj możesz dodać wysyłanie maila lub inne przetwarzanie
  res.json({ status: 'success', message: 'Dziękujemy za kontakt!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});