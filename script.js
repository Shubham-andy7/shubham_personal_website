// Data
const experiences = [
    {
        title: "Software Development Engineer",
        company: "CANTONICA",
        location: "New York, NY",
        date: "May 2024 – Present",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cantonica-reAxW6pkZd9MmDRJFFbS71fQS28KpN.jpeg",
        responsibilities: [
            "Spearheaded the development of a real-time event processing system",
            "Integrated Apache Kafka with a Python-based processing pipeline",
            "Optimized data storage in MongoDB",
            "Collaborated with cross-functional teams",
            "Designed and deployed an app-recommendation system"
        ]
    },
    // ... (add other experiences)
];

const educations = [
    {
        school: "Stevens Institute of Technology",
        location: "Hoboken, NJ",
        degree: "Master of Science in Computer Science",
        gpa: "GPA: 3.70/4.0",
        date: "May 2024",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stevens-P5p8lIzro4HcTCtdIP8Wn4Bjln8TXm.jpeg",
        details: [
            "Graduate Teaching Assistant for Machine Learning CS556",
            "Graduate Research Assistant for Deep Learning CS583"
        ]
    },
    // ... (add other education)
];

const skills = [
    { name: 'Python', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/python-agd69LHvwWplkne0PiC4CByDJMZe0k.png' },
    // ... (add other skills)
];

const certifications = [
    {
        title: "Azure Data Engineer Associate",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/azure%20data%20engineer%20associate-YgxT54H6v6yAu25mAoiohNrjwvzez9.png",
        credentials: "https://learn.microsoft.com/api/credentials/share/en-us/ShubhamSachinKulkarni-0273/CB714DDD08954473?sharingId=BFF6CFEF73BFBAA1"
    },
    // ... (add other certifications)
];

const projects = [
    {
        title: "AI Interactive Learning Framework",
        technologies: "Python, Fetch.AI, Claude API, OpenAI, NLP",
        description: "Conceptualized an AI-driven learning platform using Fetch.AI's uAgents, OpenAI APIs, and Claude, delivering adaptive, emotionally intelligent user assessments and skill-based learning paths.",
        github: "https://github.com/Shubham-andy7/NOW-YOU-KNOW-AI-HACKATHON",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20agents-JREvTia8DJcblcvl89ibGVTjIqqcSf.png"
    },
    {
        title: "YouTube Data Analysis using AWS",
        technologies: "Python, AWS (Athena, S3, Lambda, QuickSight)",
        description: "Developed an ETL pipeline to ingest 50,000+ daily YouTube records into an S3 data lake, leveraging Athena and QuickSight for trend analysis and dashboard creation, reducing server management efforts by 40%.",
        github: "https://github.com/Shubham-andy7/YouTube_Analysis_AWS",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube%20data%20analysis-oLe968l75NImUI69xmxmFfSdRu64G9.png"
    },
    // ... (add other projects)
];

// DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
    renderExperiences();
    renderEducation();
    renderSkills();
    renderCertifications();
    renderProjects();
    setupNavigation();
    setupThemeToggle();
    setupContactForm();
});

function renderExperiences() {
    const timelineContainer = document.querySelector('.timeline');
    experiences.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-content ${index % 2 === 0 ? 'left' : 'right'}">
                <h3>${exp.title}</h3>
                <p>${exp.company} | ${exp.location}</p>
                <p>${exp.date}</p>
                <ul>
                    ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>
            <img src="${exp.logo}" alt="${exp.company} logo" class="timeline-logo">
        `;
        timelineContainer.appendChild(item);
    });
}

function renderEducation() {
    const educationGrid = document.querySelector('.education-grid');
    educations.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';
        item.innerHTML = `
            <img src="${edu.logo}" alt="${edu.school} logo" class="education-logo">
            <h3>${edu.school}</h3>
            <p>${edu.location}</p>
            <p>${edu.degree}</p>
            <p>${edu.gpa}</p>
            <p>${edu.date}</p>
            <ul>
                ${edu.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
        `;
        educationGrid.appendChild(item);
    });
}

function renderSkills() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
    document.getElementById('skills-container').appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0.3 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    const skillObjects = skills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;

        const object = new THREE.Object3D();
        object.position.setFromSphericalCoords(2, phi, theta);

        const element = document.createElement('div');
        element.className = 'skill-item';
        element.textContent = skill.name;
        element.style.backgroundImage = `url(${skill.image})`;

        const label = new THREE.CSS2DObject(element);
        label.position.copy(object.position);
        scene.add(label);

        return object;
    });

    const css2dRenderer = new THREE.CSS2DRenderer();
    css2dRenderer.setSize(400, 400);
    css2dRenderer.domElement.style.position = 'absolute';
    css2dRenderer.domElement.style.top = '0';
    document.getElementById('skills-container').appendChild(css2dRenderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.005;
        skillObjects.forEach(obj => obj.lookAt(camera.position));
        renderer.render(scene, camera);
        css2dRenderer.render(scene, camera);
    }
    animate();
}

function renderCertifications() {
    const certificationsGrid = document.querySelector('.certifications-grid');
    certifications.forEach(cert => {
        const item = document.createElement('div');
        item.className = 'certification-item';
        item.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certification-image">
            <a href="${cert.credentials}" target="_blank" rel="noopener noreferrer">View Credentials</a>
        `;
        certificationsGrid.appendChild(item);
    });
}

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'project-item';
        item.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <h3>${project.title}</h3>
            <p>${project.technologies}</p>
            <p>${project.description}</p>
            <a href="${project.github}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        `;
        projectsGrid.appendChild(item);
    });
}

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

