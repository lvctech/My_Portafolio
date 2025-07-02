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
            role: 'Desarrolladara Front-End & Diseñadara UX/UI',
            viewProjects: 'Ver Proyectos',
            contact: 'Contacto'
        },
        about: {
            title: 'Sobre Mí',
            text1: 'Soy un desarrolladara apasionada por realizar proyectos accesibles, intuitivos y responsivos. Me especializo en el área de Front-End, pero también con conocimientos de Full-Stack utlizando varias tecnologías, lenguajes de programación y programas para desarrollar interfaces y páginas web modernas.',
            text2: 'Mi enfoque combina código limpio, diseño intuitivo y las mejores prácticas de desarrollo para crear proyectos que no solo sean funcional, sino también proporcionen una experiencia excepcional al usuario.'
        },
        projects: {
            title: 'Mis Proyectos',
            // Añadido: títulos de las cartas principales
            card1Title: 'Parque Indígena Caguana',
            card2Title: 'Voz Estudiantil',
            card3Title: 'Fun Learning',
            desc1: 'Página web sobre el Parque Indídena Ceremonial de Caguana conteniendo información sobre los diferentes recursos arquelógicos y naturales que ofrece el parque.',
            desc2: 'Aplicación web donde los estudiantes universitarios pueden postear reseñas sobre la univerisdad, enviar promociones de eventos y calificar profesores.',
            desc3: 'Interfaces de una aplicación para niños donde practican ejercicios de materias escolares.',
            demo: 'Ver Demo',
            code: 'Código',
            more: 'Ver más proyectos',
            demoBtn: 'Ver proyecto',
            codeBtn: 'Código',
            more1: {
                title: 'Lego Serious Play: Montar un pato',
                desc: 'Una guía detallada para niños de temprana edad para montar un pato de Lego en dos maneras diferentes.'
            },
            more2: {
                title: 'MealPrepMagic',
                desc: 'Test interfaces for a mobile app for weekly meal preps, recipes, and a shopping service for meal kit purchases.'
            },
            more3: {
                title: 'Portafolio: Gráficos por computadora',
                desc: 'Portafolio eléctronico sobre los gráficos por computadora como Visual Basic, modelos 3D, modelos SVG, entre otros.'
            }
        },
        skills: {
            title: 'Habilidades'
        },
        contact: {
            title: 'Contáctame',
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
        },
        certs: {
            title: 'Certificaciones',
            copilot: 'Certificación Microsoft Copilot',
            figma: 'Certificación Figma',
            fullstack: 'Certificación Full Stack',
            scrum: 'Certificación Scrum',
            tutorias: 'Certificación Tutorías de Matemáticas',
            ihack: 'Certificado de logro I-HACK-2025, Tercer Lugar.'
        }
    },
    en: {
        nav: {
            brand: 'My Portfolio',
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },
        hero: {
            role: 'Front-End Developer & UX/UI Designer',
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
            // Añadido: títulos de las cartas principales
            card1Title: 'Caguana Indigenous Park',
            card2Title: 'Voz Estudiantil',
            card3Title: 'Fun Learning',
            desc1: 'Web page about the Caguana Indigenous Ceremonial Park containing information about the different archaeological and natural resources offered by the park.',
            desc2: 'Web application where university students can post reviews about the university, promote events, and rate professors.',
            desc3: 'Interfaces for a children\'s app where they practice exercises from school subjects',
            demo: 'View Demo',
            code: 'Code',
            more: 'See more projects',
            demoBtn: 'View Project',
            codeBtn: 'Code',
            more1: {
                title: 'Lego Serious Play: Build a Duck',
                desc: 'A detailed guide for young children to build a Lego duck in two different ways.'
            },
            more2: {
                title: 'MealPrepMagic',
                desc: 'API for data management with authentication.'
            },
            more3: {
                title: 'Portfolio: Computer Graphics',
                desc: 'Electronic portfolio about computer graphics such as Visual Basic, 3D models, SVG models, among others.'
            }
        },
        skills: {
            title: 'Skills'
        },
        contact: {
            title: "Contact Me",
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
        },
        certs: {
            title: 'Certifications',
            copilot: 'Microsoft Copilot Certification',
            figma: 'Figma Certification',
            fullstack: 'Full Stack Certification',
            scrum: 'Scrum Certification',
            tutorias: 'Math Tutoring Certification',
            ihack: 'I-HACK-2025 Achievement Certificate, Third Place.'
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

    // Mostrar más proyectos
    const btnMoreProjects = document.getElementById('btn-more-projects');
    if (btnMoreProjects) {
        btnMoreProjects.addEventListener('click', function() {
            const moreProjects = document.querySelector('.more-projects');
            if (moreProjects) {
                moreProjects.classList.remove('d-none');
                btnMoreProjects.style.display = 'none';
            }
        });
    }

    // Scroll events
    window.addEventListener('scroll', function() {
        updateProgressBar();
        updateActiveNav();
        handleFadeIn();
        animateSkillBars();
    });

    // Initialize
    handleFadeIn();
    setLanguage('es');
});

// Resize handler
window.addEventListener('resize', function() {
    handleFadeIn();
});