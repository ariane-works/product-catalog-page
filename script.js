const projects = [
    {
        name: "Interactive Portfolio",
        description: "A responsive personal portfolio website showcasing skills in web development.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://ariane-works.github.io/ariane-portfolio/",
        repoLink: "https://github.com/ariane-works/ariane-portfolio"
    },
    {
        name: "Task Management App",
        description: "A simple web application to manage and organize daily tasks with a clean interface.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "#",
        repoLink: "#"
    },
    {
        name: "Landing Page Redesign",
        description: "A modern, responsive landing page created from scratch with a focus on user experience.",
        technologies: ["HTML", "CSS"],
        liveLink: "#",
        repoLink: "#"
    },
    {
        name: "Calculator App",
        description: "A fully functional calculator built with basic JavaScript logic and a clean design.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "#",
        repoLink: "#"
    }
];

const projectContainer = document.getElementById('project-container');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayProjects(filteredProjects) {
    projectContainer.innerHTML = '';
    if (filteredProjects.length === 0) {
        projectContainer.innerHTML = '<p style="text-align: center; width: 100%;">No projects found. Please try a different search.</p>';
        return;
    }

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => <span class="tech-tag">${tech}</span>).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveLink}" target="_blank" class="project-link view">View Live</a>
                <a href="${project.repoLink}" target="_blank" class="project-link repo">View Code</a>
            </div>
        `;
        projectContainer.appendChild(card);
    });
}

// Initial display of all projects
displayProjects(projects);

// Filter by search input
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const activeTech = document.querySelector('.filter-btn.active').dataset.tech;
    
    const filtered = projects.filter(project =>
        (project.name.toLowerCase().includes(searchTerm) ||
         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))) &&
        (activeTech === 'all' || project.technologies.includes(activeTech))
    );
    displayProjects(filtered);
});

// Filter by technology buttons
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove 'active' class from all buttons and add to the clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        const techToFilter = e.target.dataset.tech;
        const searchTerm = searchInput.value.toLowerCase();

        const filtered = projects.filter(project => 
            (techToFilter === 'all' || project.technologies.includes(techToFilter)) &&
            (project.name.toLowerCase().includes(searchTerm) || 
             project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)))
        );
        displayProjects(filtered);
    });
});
