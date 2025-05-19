document.addEventListener("DOMContentLoaded", function () {
    // Obiekt z tłumaczeniami
    const translations = {
        pl: {
            nav_start: "Start",
            nav_fleet: "Flota",
            nav_crew: "Załoga",
            nav_contact: "Kontakt",
            nav_other: "Inne",
            nav_before_flight: "Before Flight",
            nav_rules: "Zasady i porady",
            nav_sop: "SOP",
            nav_regulations: "Regulamin",
            nav_magazine: "Magazyn pokładowy",
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
            before_flight_title: "Przygotuj się do lotu",
            before_flight_subtitle: "Sprawdź, co musisz wiedzieć i zabrać ze sobą przed lotem z CometJet Virtual Airlines.",
            before_flight_mic_title: "Mikrofon",
            before_flight_mic_desc: "Posiadaj działający mikrofon, aby komunikować się z kontrolą lotów i załogą.",
            before_flight_sim_title: "Symulator",
            before_flight_sim_desc: "Zainstaluj symulator lotu (np. MSFS, X-Plane) i upewnij się, że działa prawidłowo.",
            before_flight_discord_title: "Discord",
            before_flight_discord_desc: "Dołącz do naszego serwera Discord, aby otrzymać dalsze instrukcje i wsparcie.",
            before_flight_checklist_title: "Checklista",
            before_flight_checklist_desc: "Zapoznaj się z checklistą przed lotem dostarczoną przez CometJet.",
            before_flight_discord_btn: "Dołącz do Discorda",
            before_flight_sim_btn: "Pobierz symulator",
            menu_economy_pl: "Ekonomiczna (PL)",
            menu_first_class_pl: "Pierwsza Klasa (PL)",
            menu_economy_en: "Economy (EN)",
            menu_first_class_en: "First Class (EN)",
            magazine_title: "Magazyn Pokładowy",
            magazine_desc: "Przeglądaj nasze najnowsze wydania magazynu pokładowego online lub pobierz PDF.",
            form_title: "Formularz aplikacyjny",
            callsign: "Callsign (nick pilota)",
            experience: "Doświadczenie w lotnictwie wirtualnym",
            motivation: "Dlaczego chcesz dołączyć?",
            exp_none: "Brak",
            exp_low: "Małe (0-50h)",
            exp_medium: "Średnie (50-200h)",
            exp_high: "Duże (200h+)",
            form_submit: "Wyślij zgłoszenie",
            form_success: "✅ Dziękujemy! Twoje zgłoszenie zostało przesłane."
        },
        en: {
            nav_start: "Home",
            nav_fleet: "Fleet",
            nav_crew: "Crew",
            nav_contact: "Contact",
            nav_other: "Other",
            nav_before_flight: "Before Flight",
            nav_rules: "Rules and Tips",
            nav_sop: "SOP",
            nav_regulations: "Regulations",
            nav_magazine: "Onboard Magazine",
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
            before_flight_sim_btn: "Download Simulator",
            menu_economy_pl: "Economy (PL)",
            menu_first_class_pl: "First Class (PL)",
            menu_economy_en: "Economy (EN)",
            menu_first_class_en: "First Class (EN)",
            magazine_title: "Onboard Magazine",
            magazine_desc: "Browse our latest onboard magazine issues online or download the PDF.",
            form_title: "Application Form",
            callsign: "Callsign (pilot nickname)",
            experience: "Experience in virtual aviation",
            motivation: "Why do you want to join?",
            exp_none: "None",
            exp_low: "Low (0-50h)",
            exp_medium: "Medium (50-200h)",
            exp_high: "High (200h+)",
            form_submit: "Submit Application",
            form_success: "✅ Thank you! Your application has been submitted."
        }
    };

    // Dynamiczne menu
    const navItems = [
        { href: "index.html", key: "nav_start" },
        { href: "fleet.html", key: "nav_fleet" },
        { href: "crew.html", key: "nav_crew" },
        { href: "contact.html", key: "nav_contact" },
        {
            key: "nav_other",
            id: "inne-button",
            ariaLabel: "Rozwiń menu Inne",
            dropdown: [
                { href: "before-flight.html", key: "nav_before_flight", title: "Przygotuj się do lotu" },
                { href: "rules.html", key: "nav_rules", title: "Zapoznaj się z zasadami i poradami" },
                { href: "sop.html", key: "nav_sop", title: "Standardowe procedury operacyjne" },
                { href: "regulations.html", key: "nav_regulations", title: "Regulamin CometJet" },
                { href: "magazine.html", key: "nav_magazine", title: "Przeglądaj magazyn pokładowy" }
            ]
        },
        { href: "formularz.html", key: "nav_apply", class: "btn" }
    ];

    function renderNav(navId, isMobile = false) {
        const nav = document.getElementById(navId);
        const ul = document.createElement("ul");
        navItems.forEach(item => {
            const li = document.createElement("li");
            if (item.dropdown) {
                const button = document.createElement("button");
                button.id = item.id;
                button.setAttribute("aria-label", item.ariaLabel);
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("data-lang-key", item.key);
                button.textContent = translations.pl[item.key] + " ▾";
                li.appendChild(button);

                const dropdown = document.createElement("div");
                dropdown.id = "inne-dropdown";
                dropdown.classList.add("hidden");
                item.dropdown.forEach(dropItem => {
                    const a = document.createElement("a");
                    a.href = dropItem.href;
                    a.setAttribute("data-lang-key", dropItem.key);
                    a.title = dropItem.title;
                    a.textContent = translations.pl[dropItem.key];
                    dropdown.appendChild(a);
                });
                li.appendChild(dropdown);
            } else {
                const a = document.createElement("a");
                a.href = item.href;
                a.setAttribute("data-lang-key", item.key);
                if (item.class) a.classList.add(item.class);
                a.textContent = translations.pl[item.key];
                li.appendChild(a);
            }
            ul.appendChild(li);
        });
        nav.appendChild(ul);
    }

    renderNav("desktop-nav");
    renderNav("mobile-menu", true);

    // Funkcja do zmiany języka
    function setLanguage(lang) {
        localStorage.setItem("language", lang);
        document.querySelectorAll("[data-lang-key]").forEach(element => {
            const key = element.getAttribute("data-lang-key");
            element.textContent = translations[lang][key] + (element.tagName === "BUTTON" && key === "nav_other" ? " ▾" : "");
        });
        document.querySelectorAll("[data-lang-placeholder]").forEach(element => {
            const key = element.getAttribute("data-lang-placeholder");
            element.placeholder = translations[lang][key];
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

    // Debouncing
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Przełączanie języka
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", debounce(() => {
            const lang = btn.getAttribute("data-lang");
            setLanguage(lang);
        }, 200));
    });

    // Menu rozwijane
    const inneButton = document.getElementById("inne-button");
    const inneDropdown = document.getElementById("inne-dropdown");
    if (inneButton && inneDropdown) {
        inneButton.addEventListener("click", debounce(() => {
            const isExpanded = !inneDropdown.classList.contains("hidden");
            inneButton.setAttribute("aria-expanded", !isExpanded);
            inneDropdown.classList.toggle("hidden");
        }, 200));

        window.addEventListener("click", (e) => {
            if (!inneButton.contains(e.target) && !inneDropdown.contains(e.target)) {
                inneDropdown.classList.add("hidden");
                inneButton.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Menu mobilne
    const navToggle = document.getElementById("nav-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (navToggle && mobileMenu) {
        navToggle.addEventListener("click", debounce(() => {
            const isExpanded = !mobileMenu.classList.contains("hidden");
            navToggle.setAttribute("aria-expanded", !isExpanded);
            mobileMenu.classList.toggle("hidden");
        }, 200));
    }

    // Walidacja formularza
    const form = document.getElementById("application-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = form.querySelector("#name").value;
            const email = form.querySelector("#email").value;
            const callsign = form.querySelector("#callsign").value;
            const experience = form.querySelector("#experience").value;
            const motivation = form.querySelector("#motivation").value;

            if (!name || !email || !callsign || !experience || !motivation) {
                alert(translations[savedLang].form_error || "Proszę wypełnić wszystkie pola.");
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert(translations[savedLang].form_email_error || "Proszę podać prawidłowy email.");
                return;
            }

            document.querySelector(".success-message").style.display = "block";
            form.reset();
        });
    }

    // Animacje GSAP
    gsap.to("nav a, nav button", {
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

    // Sprawdzenie ładowania obrazów
    const cockpitImage = new Image();
    cockpitImage.src = "cockpit-bg.jpg";
    cockpitImage.onload = () => console.log("Cockpit background loaded successfully");
    cockpitImage.onerror = () => {
        console.error("Failed to load cockpit-bg.jpg");
        document.querySelector(".before-flight").style.backgroundImage = "url('fallback-bg.jpg')";
    };

    const icons = ["mic-icon.png", "sim-icon.png", "discord-icon.png", "checklist-icon.png"];
    icons.forEach(icon => {
        const img = new Image();
        img.src = icon;
        img.onload = () => console.log(`${icon} loaded successfully`);
        img.onerror = () => console.error(`Failed to load ${icon}`);
    });
});