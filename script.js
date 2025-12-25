// Database of courses
const courses = [
    // HTML CATEGORY
    {
        title: "All HTML Inputs",
        category: "html",
        description: "A complete guide to form elements, attributes, and validation logic.",
        link: "all-inputs.html"
    },
    {
        title: "Semantic Structure",
        category: "html",
        description: "Learn how to use header, nav, section and article for better SEO.",
        link: "Semanitc.html"
    },
    // CSS CATEGORY
    {
        title: "Premium Glow Buttons",
        category: "css",
        description: "Create stunning buttons with animations, shadows, and glass effects.",
        link: "premium-buttons.html"
    },
    {
        title: "Mastering Flexbox",
        category: "css",
        description: "The ultimate guide to centering and aligning elements like a pro.",
        link: "flexbox-mastery.html"
    },
    {
        title: "Glassmorphism UI",
        category: "css",
        description: "The art of Frosted Glass using only CSS filters.",
        link: "coming-soon.html"
    },
    // JS CATEGORY
    {
        title: "DOM Manipulation",
        category: "js",
        description: "Learn how to dynamically change styles and content using JavaScript.",
        link: "dom-basics.html"
    },
    {
        title: "Array Methods",
        category: "js",
        description: "Master map, filter, and reduce to handle data efficiently.",
        link: "arrays.html"
    }
];

function renderCourses(filter = 'all') {
    const grid = document.getElementById('courses-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? courses 
        : courses.filter(c => c.category === filter);

    filtered.forEach(course => {
        grid.innerHTML += `
            <div class="course-card">
                <span class="category-tag">${course.category}</span>
                <h3>${course.title}</h3>
                <p class="subtext">${course.description}</p>
                <a href="${course.link}" class="btn-start">Start Learning</a>
            </div>
        `;
    });
}

function filterCourses(category) {
    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === category) btn.classList.add('active');
        if(category === 'all' && btn.innerText === 'All') btn.classList.add('active');
    });

    renderCourses(category);
}

// Initial render
renderCourses();