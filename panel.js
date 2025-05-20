document.addEventListener('DOMContentLoaded', () => {
  const token = sessionStorage.getItem('token');
  const username = sessionStorage.getItem('username');
  const pilotName = sessionStorage.getItem('pilotName');

  if (!token || !username) {
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('pilot-name').textContent = pilotName;

  const scheduleForm = document.getElementById('schedule-form');
  const scheduleList = document.getElementById('schedule-list');
  const flightsList = document.getElementById('flights-list');
  const aircraftList = document.getElementById('aircraft-list');
  const logoutBtn = document.getElementById('logout-btn');

  async function fetchSchedule() {
    try {
      const res = await fetch('/api/schedule', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        return data.days;
      } else {
        alert('Błąd pobierania grafiku: ' + (data.error || ''));
        return [];
      }
    } catch {
      alert('Błąd sieci podczas pobierania grafiku');
      return [];
    }
  }

  async function saveSchedule(days) {
    try {
      const res = await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ days })
      });
      const data = await res.json();
      if (!res.ok) {
        alert('Błąd zapisu grafiku: ' + (data.error || ''));
      } else {
        alert('Grafik zapisany!');
      }
    } catch {
      alert('Błąd sieci podczas zapisu grafiku');
    }
  }

  function displaySchedule(days) {
    scheduleList.innerHTML = '';
    if (!days || days.length === 0) {
      scheduleList.innerHTML = '<li>Brak zaznaczonych dni.</li>';
      return;
    }
    days.forEach(day => {
      const li = document.createElement('li');
      li.textContent = day;
      scheduleList.appendChild(li);
    });
  }

  // Ustaw checkboxy wg zapisanego grafiku
  async function initSchedule() {
    const savedDays = await fetchSchedule();
    const checkboxes = document.querySelectorAll('input[name="days"]');
    checkboxes.forEach(cb => {
      cb.checked = savedDays.includes(cb.value);
    });
    displaySchedule(savedDays);
  }

  scheduleForm.addEventListener('submit', async e => {
    e.preventDefault();
    const selectedDays = Array.from(document.querySelectorAll('input[name="days"]:checked')).map(cb => cb.value);
    await saveSchedule(selectedDays);
    displaySchedule(selectedDays);
  });

  // Dane testowe lotów i samolotów (możesz z czasem podmienić na backend)
  const testFlights = {
    pilot1: [
      { date: '2025-05-20', route: 'Warszawa → Londyn' },
      { date: '2025-05-21', route: 'Londyn → Berlin' }
    ],
    pilot2: [
      { date: '2025-05-22', route: 'Paryż → Rzym' }
    ]
  };

  const testAircraft = {
    pilot1: [
      { model: 'Boeing 737', registration: 'SP-XYZ' },
      { model: 'Airbus A320', registration: 'SP-ABC' }
    ],
    pilot2: [
      { model: 'Embraer 190', registration: 'SP-EMB' }
    ]
  };

  flightsList.innerHTML = '';
  (testFlights[username] || []).forEach(flight => {
    const li = document.createElement('li');
    li.textContent = `${flight.date}: ${flight.route}`;
    flightsList.appendChild(li);
  });

  aircraftList.innerHTML = '';
  (testAircraft[username] || []).forEach(aircraft => {
    const li = document.createElement('li');
    li.textContent = `${aircraft.model} - ${aircraft.registration}`;
    aircraftList.appendChild(li);
  });

  logoutBtn.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'index.html';
  });

  // Inicjalizacja panelu
  initSchedule();
});
