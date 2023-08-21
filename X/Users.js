// Your JavaScript code here

// Simulated user data storage
const users = [];
const posts = [];

// Registration form submission
document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    users.push({ username, password });
    alert('Registration successful! Please log in.');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
    if (user) {
        alert('Login successful!');
        showPostSection();
    } else {
        alert('Invalid credentials. Please try again.');
    }
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});

// Post form submission
document.getElementById('post-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const postContent = document.getElementById('post-content').value;
    posts.push({ content: postContent });
    displayPosts();
    document.getElementById('post-content').value = '';
});

// Display posts
function displayPosts() {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.content;
        postsList.appendChild(li);
    });
}

// Show the post section after successful login
function showPostSection() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('post').style.display = 'block';
    document.getElementById('posts').style.display = 'block';
}