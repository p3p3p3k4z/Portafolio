document.addEventListener('DOMContentLoaded', () => {

    // Lógica para las traducciones
    const langData = {
        es: {
            'title': 'Mi Portafolio ^^',
            'hero-title': '¡Hola, soy Mario Ramírez!',
            'hero-description': 'Estudiante de Ingeniería en Computación con sólidas habilidades en Linux, me he centrado en el desarrollo web full-stack, transformando ideas en aplicaciones prácticas. Para fortalecer mis habilidades en programación, desarrollo proyectos personales y académicos, siempre con un firme interés en explorar nuevas tecnologías y el aprendizaje continuo.',
            'cv-button': 'Ver mi CV',
            'education-title': 'Educación y Certificaciones',
            'btn-utm': 'UTM',
            'btn-alura': 'ALURA',
            'btn-others': 'OTROS',
            'utm-cert1': 'Curso Sistema Operativo GNU/Linux. Nivel Básico',
            'utm-cert2': 'Taller Uso del lenguaje SPARQL para generar y consultar datos abiertos',
            'utm-cert3': 'Taller Programación básica en Python',
            'alura-cert1': 'Certificación OCI Foundations Associate - ONE',
            'alura-link1': 'Ver Certificado',
            'alura-cert2': 'SQL con MySQL Server de Oracle - ONE',
            'alura-link2': 'Ver Certificado',
            'alura-cert3': 'Programa Oracle Next Education F2 T7 Back-end',
            'alura-link3': 'Ver Certificado',
            'alura-cert4': 'Formación Inteligencia Artificial y Java G7 - ONE',
            'alura-link4': 'Ver Certificado',
            'alura-cert5': 'Formación Java y Spring Framework G7 - ONE',
            'alura-link5': 'Ver Certificado',
            'alura-cert6': 'Formación Java Orientado a Objetos G7 - ONE',
            'alura-link6': 'Ver Certificado',
            'alura-cert7': 'Formación Principiante en Programación G7 - ONE',
            'alura-link7': 'Ver Certificado',
            'other-cert1': 'Oracle Certified Foundations Associate',
            'other-cert2': 'Nasa Space Apps Challenge',
            'other-cert3': 'Fundamentos de Javascript',
            'other-cert4': 'Backend con Node.JS: Api Rest con express.JS',
            'other-cert5': 'Curso de React.JS',
            'skills-title': 'Habilidades Técnicas',
            'lang-subtitle': 'Lenguajes',
            'db-subtitle': 'Bases de Datos',
            'frameworks-subtitle': 'Frameworks y Librerías',
            'tools-subtitle': 'Herramientas',
            'projects-title': 'Proyectos Destacados',
            'proj1-title': 'Agenda AI',
            'proj1-desc': 'Aplicación web full-stack para la gestión de agendas personales, incorporando funcionalidades de inteligencia artificial para optimizar la interacción y la organización del usuario.',
            'proj1-link': 'Ver más',
            'proj2-title': 'Quiz App',
            'proj2-desc': 'Plataforma full-stack que usa IA para generar quizzes y feedback. Gestiona el rendimiento de alumnos y el seguimiento de profesores.',
            'proj2-link': 'Ver más',
            'proj3-title': 'todo-list',
            'proj3-desc': 'Esta aplicación permite gestionar tareas a través de una interfaz de consola, una API web con FastAPI y una interfaz web con Flask. Las tareas se organizan en diferentes baúles (archivos JSON).',
            'proj3-link': 'Ver más',
            'proj4-title': 'Análisis de Algoritmos',
            'proj4-desc': 'Implementación de una herramienta en Python para analizar el rendimiento de distintos algoritmos de ordenamiento. Incluye visualización en tiempo real y gráficos comparativos.',
            'proj4-link': 'Ver más',
            'proj5-title': 'Procesador',
            'proj5-desc': 'Este es un proyecto para la materia de "Arquitectura de Computadoras". Es un procesador de un ciclo, capaz de realizar pequeños programas.',
            'proj5-link': 'Ver más',
            'proj6-title': 'Script Linux',
            'proj6-desc': 'Creación de un asistente automatizado para la instalación y gestión de paquetes en sistemas Linux, optimizando la configuración de entornos de desarrollo.',
            'proj6-link': 'Ver más',
            'proj7-title': 'Cozobi',
            'proj7-desc': 'Aplicación web que integra datos geoespaciales para mejorar la planificación agrícola y optimizar el uso de recursos. Desarrollada en el marco del NASA Space Apps Challenge.',
            'proj7-link': 'Ver más',
            'proj8-title': 'PettiApp',
            'proj8-desc': 'Desarrollo de una aplicación web para la gestión eficiente de una cafetería. Permite administrar inventarios y optimizar insumos.',
            'proj8-link': 'Ver más',
            'proj9-title': 'Tienda de peluches',
            'proj9-desc': 'Mini tienda de peluches, con las funcionalidades básicas de una tienda online real.',
            'proj9-link': 'Ver más',
            'contact-title': 'Contacto',
            'contact-linkedin': 'Mi LinkedIn: ',
            'contact-github': 'Mi GitHub: ',
            'contact-email': 'Puedes escribirme a: ',
            // cv.html
            'cv-page-title': 'Currículum | Mario Ramírez',
            'cv-title': 'Mi CV',
            'cv-subtitle': 'Puedes descargar mi currículum o verlo en línea.',
            'download-cv-button': 'Descargar CV',
            'return-home-button': 'Regresa al inicio',
        },
        en: {
            'title': 'My Portfolio ^^',
            'hero-title': "Hello, I'm Mario Ramírez!",
            'hero-description': 'Computer Engineering student with solid skills in Linux, I have focused on full-stack web development, transforming ideas into practical applications. To strengthen my programming skills, I develop personal and academic projects, always with a firm interest in exploring new technologies and continuous learning.',
            'cv-button': 'View my CV',
            'education-title': 'Education and Certifications',
            'btn-utm': 'UTM',
            'btn-alura': 'ALURA',
            'btn-others': 'OTHERS',
            'utm-cert1': 'GNU/Linux Operating System Course. Basic Level',
            'utm-cert2': 'Workshop on Using the SPARQL Language to Generate and Query Open Data',
            'utm-cert3': 'Basic Python Programming Workshop',
            'alura-cert1': 'OCI Foundations Associate Certification - ONE',
            'alura-link1': 'View Certificate',
            'alura-cert2': 'SQL with Oracle MySQL Server - ONE',
            'alura-link2': 'View Certificate',
            'alura-cert3': 'Oracle Next Education Program F2 T7 Back-end',
            'alura-link3': 'View Certificate',
            'alura-cert4': 'Artificial Intelligence and Java G7 Training - ONE',
            'alura-link4': 'View Certificate',
            'alura-cert5': 'Java and Spring Framework G7 Training - ONE',
            'alura-link5': 'View Certificate',
            'alura-cert6': 'Object-Oriented Java G7 Training - ONE',
            'alura-link6': 'View Certificate',
            'alura-cert7': 'Beginner Programming Training G7 - ONE',
            'alura-link7': 'View Certificate',
            'other-cert1': 'Oracle Certified Foundations Associate',
            'other-cert2': 'Nasa Space Apps Challenge',
            'other-cert3': 'JavaScript Fundamentals',
            'other-cert4': 'Backend with Node.JS: REST API with express.JS',
            'other-cert5': 'React.JS Course',
            'skills-title': 'Technical Skills',
            'lang-subtitle': 'Languages',
            'db-subtitle': 'Databases',
            'frameworks-subtitle': 'Frameworks and Librerías',
            'tools-subtitle': 'Herramientas',
            'projects-title': 'Featured Projects',
            'proj1-title': 'Agenda AI',
            'proj1-desc': 'Full-stack web application for personal agenda management, incorporating artificial intelligence (AI) functionalities to optimize user interaction and organization.',
            'proj1-link': 'View more',
            'proj2-title': 'Quiz App',
            'proj2-desc': 'Full-stack platform that uses AI to generate quizzes and feedback. Manages student performance and teacher tracking.',
            'proj2-link': 'View more',
            'proj3-title': 'todo-list',
            'proj3-desc': 'This application allows you to manage tasks through a console interface, a web API with FastAPI, and a web interface with Flask. Tasks are organized into different vaults (JSON files).',
            'proj3-link': 'View more',
            'proj4-title': 'Algorithm Analysis',
            'proj4-desc': 'Implementation of a Python tool to analyze the performance of various sorting algorithms. Includes real-time visualization and comparative graphs.',
            'proj4-link': 'View more',
            'proj5-title': 'Processor',
            'proj5-desc': 'This is a project for the "Computer Architecture" course. It is a single-cycle processor capable of running small programs.',
            'proj5-link': 'View more',
            'proj6-title': 'Linux Script',
            'proj6-desc': 'Creation of an automated assistant for installing and managing packages on Linux systems, optimizing the configuration of development environments.',
            'proj6-link': 'View more',
            'proj7-title': 'Cozobi',
            'proj7-desc': 'Web application that integrates geospatial data to improve agricultural planning and optimize resource use. Developed within the framework of the NASA Space Apps Challenge.',
            'proj7-link': 'View more',
            'proj8-title': 'PettiApp',
            'proj8-desc': 'Development of a web application for the efficient management of a cafeteria. It allows managing inventories and optimizing supplies.',
            'proj8-link': 'View more',
            'proj9-title': 'Plushie Store',
            'proj9-desc': 'Mini plushie store, with the basic functionalities of a real online store.',
            'proj9-link': 'View more',
            'contact-title': 'Contact',
            'contact-linkedin': 'My LinkedIn: ',
            'contact-github': 'My GitHub: ',
            'contact-email': 'You can write to me at: ',
            // cv.html
            'cv-page-title': 'Resume | Mario Ramírez',
            'cv-title': 'My Resume',
            'cv-subtitle': 'You can download my resume or view it online.',
            'download-cv-button': 'Download Resume',
            'return-home-button': 'Return to home',
        }
    };
    
    // Función para aplicar las traducciones y guardar el idioma
    const setLanguage = (lang) => {
        // Guardar el idioma en el localStorage
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;
        const pageTitle = document.getElementById('title') || document.getElementById('cv-page-title');
        if (pageTitle) {
            pageTitle.textContent = langData[lang][pageTitle.id];
        }

        const elements = document.querySelectorAll('[id]');
        elements.forEach(el => {
            const translation = langData[lang][el.id];
            if (translation) {
                // Verificar si es un enlace de contacto para no sobrescribir el <a>
                if (el.id.startsWith('contact-') && el.tagName.toLowerCase() === 'p') {
                    const link = el.querySelector('a');
                    if (link) {
                        const originalLinkText = link.textContent.trim();
                        el.innerHTML = translation + `<a href="${link.href}" target="_blank">${originalLinkText}</a>`;
                    } else {
                        el.textContent = translation;
                    }
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Lógica para cambiar la ruta del CV
        const cvLink = document.getElementById('download-cv-button');
        const cvIframe = document.getElementById('cv-iframe');
        if (cvLink && cvIframe) {
            if (lang === 'es') {
                cvLink.href = 'newcv.pdf';
                cvLink.download = 'Mario_Ramirez_CV.pdf';
                cvIframe.src = 'newcv.pdf';
            } else { // 'en'
                cvLink.href = 'micv_ingles.pdf';
                cvLink.download = 'Mario_Ramirez_Resume.pdf';
                cvIframe.src = 'micv_ingles.pdf';
            }
        }
    };
    
    // Al cargar la página, obtener el idioma del localStorage o establecer uno por defecto
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        setLanguage(savedLanguage);
    } else {
        // Idioma predeterminado
        setLanguage('es');
    }

    // Botones de idioma
    document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-es')?.addEventListener('click', () => setLanguage('es'));

    // Mantenemos tu código original para el manejo de las tarjetas de educación
    const buttons = document.querySelectorAll(".edu-btn");
    const sections = document.querySelectorAll(".edu-cards");
    
    // Función para mostrar la sección correcta
    const showSection = (targetId) => {
        sections.forEach((section) => {
            if (section.id === targetId) {
                section.classList.remove("hidden");
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
                section.classList.add("hidden");
            }
        });
    };

    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            buttons.forEach(btn => btn.classList.remove('active-btn'));
            this.classList.add('active-btn');
            showSection(targetId);
        });
    });

    // Establecer el botón inicial
    const initialButton = document.querySelector('.edu-btn[data-target="utm"]');
    if (initialButton) {
        initialButton.classList.add('active-btn');
        showSection(initialButton.dataset.target);
    }
});