document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("about-content").innerText = portfolioData.about;

    const projectsList = document.getElementById("projects-list");
    portfolioData.projects.forEach(project => {
        const li = document.createElement("li");
        li.innerText = project;
        projectsList.appendChild(li);
    });

    const skillsList = document.getElementById("skills-list");
    portfolioData.skills.forEach(skill => {
        const li = document.createElement("li");
        li.innerText = skill;
        skillsList.appendChild(li);
    });

    document.getElementById("contact-content").innerText = portfolioData.contact;
});