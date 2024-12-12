// Display a greeting in the console
console.log("Welcome to Saswat Chandan's Portfolio!");

// Add smooth scrolling for navigation (if you have navigation links with IDs)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add interactivity to the LinkedIn and LeetCode buttons
document.getElementById('linkedin-btn').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/your-linkedin-profile', '_blank'); // Replace with the actual LinkedIn URL
});

document.getElementById('leetcode-btn').addEventListener('click', () => {
    window.open('https://leetcode.com/your-leetcode-profile', '_blank'); // Replace with the actual LeetCode profile URL
});

// Dynamically update the footer with the current year
const footer = document.querySelector('footer');
if (footer) {
    const year = new Date().getFullYear();
    footer.textContent = © ${year} Saswat Chandan. All Rights Reserved.;
}