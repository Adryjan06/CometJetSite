export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    // Jeśli wysyłasz JSON - trzeba tu przerobić na body parser (np. use form-data)
    // Ale fetch z formData powinien działać bez problemu na req.body
    
    // Przykład: odczyt z req.body (Vercel automatycznie parsuje form-data)
    const formData = req.body; // powinno zawierać name, email, message itp.
    
    // Tutaj dodajesz obsługę (np. wysyłka maila, zapis do bazy itd.)
    console.log('Form data received:', formData);

    // Na potrzeby demo - tylko potwierdzamy
    res.status(200).json({ message: 'Form submission received' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
