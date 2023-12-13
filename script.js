// script.js

// Function to add a project dynamically
function addProject(title, description) {
    const projectsContainer = document.getElementById('projects-container');

    // Create a new project card
    const projectCard = document.createElement('div');
    projectCard.classList.add('col-md-6');
    projectCard.innerHTML = `
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
            </div>
        </div>
    `;

    // Append the project card to the projects container
    projectsContainer.appendChild(projectCard);
}

// Example usage of the addProject function
addProject('Project 1', 'Description of Project 1.');
addProject('Project 2', 'Description of Project 2.');
addProject('Project 3', 'Description of Project 3.');
