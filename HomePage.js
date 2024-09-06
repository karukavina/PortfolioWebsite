const homeButton = document.getElementById('MyButton');
const projectButton = document.getElementById('ProjectButton');
const blogButton = document.getElementById('BlogButton');
const dynamicSection = document.getElementById('dynamicSection');
const initialHomeContent = dynamicSection.innerHTML;

function loadContent(page) {
    fetch(page)
    .then(response => response.text())
    .then(data => {
        dynamicSection.innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading page:', error);
        dynamicSection.innerHTML = '<h2>Sorry, content could not be loaded.</h2>';
    });
}

homeButton.addEventListener('click', () => {
    dynamicSection.innerHTML = initialHomeContent;
});

projectButton.addEventListener('click', () => {
    loadContent('Projects/project.html');
});

blogButton.addEventListener('click', () => {
    loadContent('Blog/blog.html');
});
