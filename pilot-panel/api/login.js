// api/login.js
const users = {
  pilot1: { password: 'tajne123', name: 'Kapitan Kowalski' },
  pilot2: { password: 'haslo456', name: 'Porucznik Nowak' }
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: 'Brak loginu lub hasła' });
    return;
  }

  if (users[username] && users[username].password === password) {
    // Tworzymy prosty token sesji (na przykład: base64 z nazwy użytkownika)
    const token = Buffer.from(username).toString('base64');
    res.status(200).json({ success: true, token, name: users[username].name });
  } else {
    res.status(401).json({ error: 'Nieprawidłowy login lub hasło' });
  }
}
