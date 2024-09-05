const projectButton = document.getElementById('ProjectButton');
const projectContent = document.getElementById('projectContent');
projectButton.addEventListener('click', () => {
    projectContent.style.display = 'block';
    window.location.href = 'Projects/project.html';
});


const blogButton = document.getElementById('BlogButton');
const blogContent = document.getElementById('blogContent');
blogButton.addEventListener('click', () => {
    blogContent.style.display = 'block';
    window.location.href = 'Blog/blog.HTML';
});


const myButton = document.getElementById('MyButton');
const myContent = document.getElementById('myContent');
myButton.addEventListener('click', () => {
    myContent.style.display = 'block';
    window.location.href = 'HomePage.HTML';
});
