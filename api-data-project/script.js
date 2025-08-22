// The URL of the API endpoint we want to fetch data from.
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Get the container where we will display the posts
const postsContainer = document.getElementById('posts-container');

// A function to fetch the data from the API
async function fetchPosts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Could not fetch posts:', error);
        postsContainer.innerHTML = '<p>Failed to load posts. Please try again later.</p>';
    }
}

// A function to create and display the HTML for each post
function displayPosts(posts) {
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}
fetchPosts();