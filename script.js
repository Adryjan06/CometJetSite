document.addEventListener("DOMContentLoaded", function () {
  // --- Tłumaczenia i zmiana języka ---
  const translations = {
    pl: {
      nav_start: "Start",
      nav_fleet: "Flota",
      nav_crew: "Załoga",
      nav_contact: "Kontakt",
      nav_before_flight: "Before Flight",
      nav_apply: "Złóż aplikację",
      hero_title: "CometJet",
      hero_subtitle: "Nowoczesne wirtualne linie lotnicze",
      hero_join: "Dołącz do nas",
      fleet_title: "Nasza Flota",
      fleet_aircraft: "Airbus A320neo",
      fleet_description: "Ekonomiczny samolot średniego zasięgu z nowoczesnym kokpitem.",
      crew_title: "Poznaj załogę",
      crew_member: "Aviaced",
      crew_role: "CEO",
      contact_title: "Skontaktuj się z nami",
      contact_name: "Imię i nazwisko",
      contact_email: "Email",
      contact_message: "Wiadomość",
      contact_submit: "Wyślij",
      footer_text: "© 2025 CometJet Virtual Airlines",
      before_flight_title: "Before Flight",
      before_flight_subtitle: "Przygotuj się do lotu z CometJet Virtual Airlines!",
      before_flight_mic_title: "Mikrofon",
      before_flight_mic_desc: "Posiadaj działający mikrofon, aby komunikować się z kontrolą lotów i załogą.",
      before_flight_sim_title: "Symulator",
      before_flight_sim_desc: "Zainstaluj symulator lotu (np. MSFS, X-Plane) i upewnij się, że działa prawidłowo.",
      before_flight_discord_title: "Discord",
      before_flight_discord_desc: "Dołącz do naszego serwera Discord, aby otrzymać dalsze instrukcje i wsparcie.",
      before_flight_checklist_title: "Checklista",
      before_flight_checklist_desc: "Zapoznaj się z checklistą przed lotem dostarczoną przez CometJet.",
      before_flight_discord_btn: "Dołącz do Discorda",
      before_flight_sim_btn: "Pobierz symulator"
    },
    en: {
      nav_start: "Home",
      nav_fleet: "Fleet",
      nav_crew: "Crew",
      nav_contact: "Contact",
      nav_before_flight: "Before Flight",
      nav_apply: "Apply",
      hero_title: "CometJet",
      hero_subtitle: "Modern Virtual Airlines",
      hero_join: "Join Us",
      fleet_title: "Our Fleet",
      fleet_aircraft: "Airbus A320neo",
      fleet_description: "Economical medium-range aircraft with a modern cockpit.",
      crew_title: "Meet the Crew",
      crew_member: "Aviaced",
      crew_role: "CEO",
      contact_title: "Contact Us",
      contact_name: "Name",
      contact_email: "Email",
      contact_message: "Message",
      contact_submit: "Send",
      footer_text: "© 2025 CometJet Virtual Airlines",
      before_flight_title: "Before Flight",
      before_flight_subtitle: "Prepare for your flight with CometJet Virtual Airlines!",
      before_flight_mic_title: "Microphone",
      before_flight_mic_desc: "Have a working microphone to communicate with air traffic control and crew.",
      before_flight_sim_title: "Simulator",
      before_flight_sim_desc: "Install a flight simulator (e.g., MSFS, X-Plane) and ensure it works properly.",
      before_flight_discord_title: "Discord",
      before_flight_discord_desc: "Join our Discord server for further instructions and support.",
      before_flight_checklist_title: "Checklist",
      before_flight_checklist_desc: "Review the pre-flight checklist provided by CometJet.",
      before_flight_discord_btn: "Join Discord",
      before_flight_sim_btn: "Download Simulator"
    }
  };

  function setLanguage(lang) {
    localStorage.setItem("language", lang);
    document.querySelectorAll("[data-lang-key]").forEach(element => {
      const key = element.getAttribute("data-lang-key");
      if (translations[lang][key]) element.textContent = translations[lang][key];
    });
    document.querySelectorAll("[data-lang-placeholder]").forEach(element => {
      const key = element.getAttribute("data-lang-placeholder");
      if (translations[lang][key]) element.placeholder = translations[lang][key];
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      }
    });
    document.documentElement.lang = lang;
  }

  const savedLang = localStorage.getItem("language") || "pl";
  setLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // --- Animacje GSAP ---
  if (typeof gsap !== "undefined") {
    gsap.to("nav a", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      delay: 0.5
    });
    gsap.from(".hero h1", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6
    });
    gsap.from(".hero p", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.8
    });
    gsap.from(".hero a", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 1
    });

    if (document.querySelector(".before-flight")) {
      gsap.from(".before-flight h1", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5
      });
      gsap.from(".before-flight .subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7
      });
      gsap.from(".instruction-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        delay: 0.9
      });
      gsap.from(".cta .btn", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        delay: 1.3
      });
    }
  }

  // --- Ładowanie obrazków do testu ---
  const cockpitImage = new Image();
  cockpitImage.src = "cockpit-bg.jpg";
  cockpitImage.onload = () => console.log("Cockpit background loaded successfully");
  cockpitImage.onerror = () => console.error("Failed to load cockpit-bg.jpg - check file path");

  const icons = ["mic-icon.png", "sim-icon.png", "discord-icon.png", "checklist-icon.png"];
  icons.forEach(icon => {
    const img = new Image();
    img.src = icon;
    img.onload = () => console.log(`${icon} loaded successfully`);
    img.onerror = () => console.error(`Failed to load ${icon} - check file path`);
  });

  // --- Dropdown "inne" ---
  const inneButton = document.getElementById('inne-button');
  const inneDropdown = document.getElementById('inne-dropdown');

  if (inneButton && inneDropdown) {
    inneButton.addEventListener('click', () => {
      inneDropdown.classList.toggle('hidden');
    });

    window.addEventListener('click', (e) => {
      if (!inneButton.contains(e.target) && !inneDropdown.contains(e.target)) {
        inneDropdown.classList.add('hidden');
      }
    });
  }

  // --- Intro video + audio ---
  const intro = document.getElementById('video-intro');
  const video = document.getElementById('intro-video');
  const audio = document.getElementById('intro-audio');
  const skipButton = document.getElementById('skip-button');

  const videos = [
    '/src/videos/plane1(4).mp4',
  ];

  if (video) {
    const randomIndex = Math.floor(Math.random() * videos.length);
    video.src = videos[randomIndex];
    video.play();
  }

  if (audio) {
    audio.volume = 0.5;
    audio.play().catch(() => {
      console.log('Autoplay audio zablokowany');
    });
  }

  document.body.style.overflow = 'hidden';

  function hideIntro() {
    if (!intro || intro.classList.contains('hidden')) return;

    gsap.to(intro, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        intro.remove();
        document.body.style.overflow = 'auto';
        if (audio) audio.pause();
      }
    });
  }

  if (video) {
    video.addEventListener('ended', hideIntro);
  }

  if (skipButton) {
    skipButton.addEventListener('click', hideIntro);
  }

  // --- Hasło i galeria ---
  const correctPassword = 'ComJetPlenCP24';

  const passwordScreen = document.getElementById('password-screen');
  const gallery = document.getElementById('gallery');
  const passwordInput = document.getElementById('password-input');
  const passwordSubmit = document.getElementById('password-submit');
  const errorMsg = document.getElementById('error-msg');

  if (passwordSubmit && passwordInput && passwordScreen && gallery && errorMsg) {
    function checkPassword() {
      const entered = passwordInput.value.trim();
      if (entered === correctPassword) {
        passwordScreen.style.display = 'none';
        gallery.style.display = 'block';
        errorMsg.classList.add('hidden');
      } else {
        errorMsg.classList.remove('hidden');
      }
    }

    passwordSubmit.addEventListener('click', checkPassword);

    passwordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
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
        if (filter === 'all' || el.getAttribute('data-category') === filter) {
          el.style.display = 'block';
        } else {
          el.style.display = 'none';
        }
      });
    });
  });

  // --- Formularz kontaktowy ---
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("Dziękujemy! Wiadomość została wysłana.");
        form.reset();
      } else {
        alert("Ups! Coś poszło nie tak. Spróbuj ponownie.");
      }
    });
  }
});
