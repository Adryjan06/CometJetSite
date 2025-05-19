document.addEventListener("DOMContentLoaded", function () {
  // --- Tłumaczenia i zmiana języka ---
  const translations = {
    pl: { /* ...twój obiekt tłumaczeń PL... */ },
    en: { /* ...twój obiekt tłumaczeń EN... */ }
  };

  function setLanguage(lang) {
    localStorage.setItem("language", lang);
    document.querySelectorAll("[data-lang-key]").forEach(el => {
      const key = el.getAttribute("data-lang-key");
      el.textContent = translations[lang][key];
    });
    document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
      const key = el.getAttribute("data-lang-placeholder");
      el.placeholder = translations[lang][key];
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-lang") === lang) btn.classList.add("active");
    });
    document.documentElement.lang = lang;
  }

  const savedLang = localStorage.getItem("language") || "pl";
  setLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  // --- Animacje GSAP ---
  gsap.to("nav a", {opacity: 1, y: 0, duration: 0.6, stagger: 0.2, delay: 0.5});
  gsap.from(".hero h1", {opacity: 0, y: 50, duration: 1, delay: 0.6});
  gsap.from(".hero p", {opacity: 0, y: 30, duration: 1, delay: 0.8});
  gsap.from(".hero a", {opacity: 0, scale: 0.8, duration: 1, delay: 1});
  if(document.querySelector(".before-flight")) {
    gsap.from(".before-flight h1", {opacity: 0, y: 50, duration: 1, delay: 0.5});
    gsap.from(".before-flight .subtitle", {opacity: 0, y: 30, duration: 1, delay: 0.7});
    gsap.from(".instruction-card", {opacity: 0, y: 50, duration: 1, stagger: 0.2, delay: 0.9});
    gsap.from(".cta .btn", {opacity: 0, scale: 0.8, duration: 1, stagger: 0.2, delay: 1.3});
  }

  // --- Sprawdzanie ładowania obrazów ---
  ["cockpit-bg.jpg", "mic-icon.png", "sim-icon.png", "discord-icon.png", "checklist-icon.png"].forEach(icon => {
    const img = new Image();
    img.src = icon;
    img.onload = () => console.log(`${icon} loaded successfully`);
    img.onerror = () => console.error(`Failed to load ${icon}`);
  });

  // --- Dropdown inne ---
  const inneButton = document.getElementById('inne-button');
  const inneDropdown = document.getElementById('inne-dropdown');
  if (inneButton && inneDropdown) {
    inneButton.addEventListener('click', () => {
      inneDropdown.classList.toggle('hidden');
    });
    window.addEventListener('click', e => {
      if (!inneButton.contains(e.target) && !inneDropdown.contains(e.target)) {
        inneDropdown.classList.add('hidden');
      }
    });
  }

  // --- Intro video i audio ---
  const intro = document.getElementById('video-intro');
  const video = document.getElementById('intro-video');
  const audio = document.getElementById('intro-audio');
  const skipButton = document.getElementById('skip-button');
  const videos = ['/src/videos/plane1.mp4'];
  if (video) {
    video.src = videos[Math.floor(Math.random() * videos.length)];
    video.play();
  }
  if (audio) {
    audio.volume = 0.5;
    audio.play().catch(() => console.log('Autoplay audio zablokowany'));
  }
  document.body.style.overflow = 'hidden';
  function hideIntro() {
    if (!intro || intro.classList.contains('hidden')) return;
    gsap.to(intro, {duration: 1, opacity: 0, onComplete: () => {
      intro.remove();
      document.body.style.overflow = 'auto';
      if(audio) audio.pause();
    }});
  }
  if (video) video.addEventListener('ended', hideIntro);
  if (skipButton) skipButton.addEventListener('click', hideIntro);

  // --- Hasło do galerii ---
  const correctPassword = 'ComJetPlenCP24';
  const passwordScreen = document.getElementById('password-screen');
  const gallery = document.getElementById('gallery');
  const passwordInput = document.getElementById('password-input');
  const passwordSubmit = document.getElementById('password-submit');
  const errorMsg = document.getElementById('error-msg');
  if(passwordSubmit && passwordInput && passwordScreen && gallery && errorMsg) {
    function checkPassword() {
      if (passwordInput.value.trim() === correctPassword) {
        passwordScreen.style.display = 'none';
        gallery.style.display = 'block';
        errorMsg.classList.add('hidden');
      } else {
        errorMsg.classList.remove('hidden');
      }
    }
    passwordSubmit.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keydown', e => {
      if(e.key === 'Enter') {
        e.preventDefault();
        checkPassword();
      }
    });
  }

  // --- Filtry galerii ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const malowania = document.querySelectorAll('.malowanie');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-yellow-400', 'text-black', 'font-bold');
        b.classList.add('bg-gray-700', 'hover:bg-yellow-400', 'hover:text-black');
      });
      btn.classList.add('bg-yellow-400', 'text-black', 'font-bold');
      btn.classList.remove('bg-gray-700', 'hover:bg-yellow-400', 'hover:text-black');

      const filter = btn.getAttribute('data-filter');
      malowania.forEach(el => {
        el.style.display = (filter === 'all' || el.getAttribute('data-category') === filter) ? 'block' : 'none';
      });
    });
  });

  // --- Obsługa wysyłania formularza (fetch do backendu) ---
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const formData = new FormData(form);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
        headers: {'Accept': 'application/json'}
      });
      if(response.ok) {
        alert("Dziękujemy! Wiadomość została wysłana.");
        form.reset();
      } else {
        alert("Ups! Coś poszło nie tak. Spróbuj ponownie.");
      }
    });
  }
});