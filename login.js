document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const error = document.getElementById('login-error');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('pilotName', data.name);
        sessionStorage.setItem('username', username);
        window.location.href = 'panel.html';
      } else {
        error.textContent = data.error || 'Błąd logowania';
      }
    } catch {
      error.textContent = 'Błąd sieci lub serwera';
    }
  });
});
