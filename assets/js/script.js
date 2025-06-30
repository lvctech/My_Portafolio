// Translations
const translations = {
    es: {
        nav: {
            brand: 'Mi Portafolio',
            home: 'Inicio',
            about: 'Sobre mí',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto'
        },
        hero: {
            role: 'Desarrolladar Front-End & Diseñadar UX/UI',
            viewProjects: 'Ver Proyectos',
            contact: 'Contacto'
        },
        about: {
            title: 'Sobre Mí',
            text1: 'Soy un desarrolladar apasionada por realizar proyectos accesibles, intuitivos y responsivos. Me especializo en el área de Front-End, pero también con conocimientos de Full-Stack utlizando varias tecnologías, lenguajes de programación y programas para desarrollar interfaces y páginas web modernas.',
            text2: 'Mi enfoque combina código limpio, diseño intuitivo y las mejores prácticas de desarrollo para crear proyectos que no solo sean funcional, sino también proporcionen una experiencia excepcional al usuario.'
        },
        projects: {
            title: 'Mis Proyectos',
            desc1: 'Aplicación de comercio electrónico con React y Node.js',
            desc2: 'Dashboard interactivo para análisis de datos',
            desc3: 'Red social con funciones de tiempo real',
            demo: 'Ver Demo',
            code: 'Código'
        },
        skills: {
            title: 'Habilidades'
        },
        contact: {
            title: 'Hablemos',
            subtitle: '¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas.',
            form: {
                name: 'Nombre',
                email: 'Email',
                subject: 'Asunto',
                message: 'Mensaje',
                namePlaceholder: 'Tu nombre',
                emailPlaceholder: 'tu@email.com',
                subjectPlaceholder: '¿De qué quieres hablar?',
                messagePlaceholder: 'Cuéntame sobre tu proyecto...',
                send: 'Enviar Mensaje',
                success: '¡Mensaje enviado! Te contactaré pronto.'
            }
        },
        footer: {
            name: 'Lara Cordero Rodríguez |',
            text: 'Número de teléfono: (787) 507-3787'
        }
    },
    en: {
        nav: {
            brand: 'My Portafolio',
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },
        hero: {
            role: 'Full Stack Developer & UX/UI Designer',
            viewProjects: 'View Projects',
            contact: 'Contact'
        },
        about: {
            title: 'About Me',
            text1: 'I’m a passionate developer focused on creating accessible, intuitive, and responsive projects. I specialize in Front-End development, but I also have Full-Stack knowledge, using various technologies, programming languages, and tools to build modern interfaces and websites.',
            text2: 'My experience focuses on combining clean code, intuitive design, and best development practices to create projects that are not only functional but also provide an exceptional user experience.'
        },
        projects: {
            title: 'My Projects',
            desc1: 'E-commerce application built with React and Node.js',
            desc2: 'Interactive dashboard for data analysis',
            desc3: 'Social network with real-time features',
            demo: 'View Demo',
            code: 'Code'
        },
        skills: {
            title: 'Skills'
        },
        contact: {
            title: "Let's Talk",
            subtitle: 'Have a project in mind? I would love to hear your ideas.',
            form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                namePlaceholder: 'Your name',
                emailPlaceholder: 'your@email.com',
                subjectPlaceholder: 'What would you like to talk about?',
                messagePlaceholder: 'Tell me about your project...',
                send: 'Send Message',
                success: 'Message sent! I will contact you soon.'
            }
        },
        footer: {
            name: 'Lara Cordero Rodríguez |',
            text: 'Phone number: (787) 507-3787'
        }
    }
};

let currentLanguage = 'es';

// Language switching
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update text content
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.dataset.key;
        const keys = key.split('.');
        let value = translations[lang];
        
        for (const k of keys) {
            value = value[k];
        }
        
        if (value) {
            element.textContent = value;
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.dataset.keyPlaceholder;
        const keys = key.split('.');
        let value = translations[lang];
        
        for (const k of keys) {
            value = value[k];
        }
        
        if (value) {
            element.placeholder = value;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Progress bar
function updateProgressBar() {
    const scrollTotal = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = scrollTotal / windowHeight;
    
    document.getElementById('progressBar').style.width = scroll * 100 + '%';
}

// Active navigation
function updateActiveNav() {
    const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = sectionId;
            }
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// Fade in animation
function handleFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.dataset.width;
        const rect = bar.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 200);
        }
    });
}

// Contact form submission
function handleContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        const successMessage = translations[currentLanguage].contact.form.success;
        alert(successMessage);
        
        // Reset form
        form.reset();
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('¡JavaScript cargado correctamente!');
    // Prueba: cambia el color del título principal
    var titulo = document.querySelector('.hero-title');
    if (titulo) {
        titulo.style.color = 'red';
    }

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            scrollToSection(sectionId);
            
            // Close mobile menu
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Scroll events
    window.addEventListener('scroll', function() {
        updateProgressBar();
        updateActiveNav();
        handleFadeIn();
        animateSkillBars();
    });

    // Initialize
    handleFadeIn();
    handleContactForm();
    setLanguage('es');
});

// Resize handler
window.addEventListener('resize', function() {
    handleFadeIn();
});