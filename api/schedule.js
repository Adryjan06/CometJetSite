// api/schedule.js
// UWAGA: na potrzeby testu przechowujemy dane w pamięci serwera (zerują się przy deployu)

let schedules = {
  // Przykład:
  // pilot1: ['Poniedziałek', 'Środa', 'Piątek']
};

export default function handler(req, res) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ error: 'Brak tokena autoryzacji' });
    return;
  }

  // Odtwarzamy username z tokena (dekodowanie base64)
  const username = Buffer.from(token, 'base64').toString('utf-8');

  if (req.method === 'GET') {
    const userSchedule = schedules[username] || [];
    res.status(200).json({ days: userSchedule });
  } else if (req.method === 'POST') {
    const { days } = req.body;
    if (!Array.isArray(days)) {
      res.status(400).json({ error: 'Nieprawidłowe dane' });
      return;
    }
    schedules[username] = days;
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
