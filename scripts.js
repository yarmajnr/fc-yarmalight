document.addEventListener('DOMContentLoaded', function() {
    // Get all sidebar links
    const sidebarLinks = document.querySelectorAll('#sidebar a');

    // Add click event listener to each link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior

            // Get the target section ID from the link's href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Smoothly scroll to the target section
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Close the sidebar after a short delay to allow smooth scrolling
            setTimeout(() => {
                closeSidebar();
            }, 500);
        });
    });

    // Add click event listener to the overlay to close the sidebar
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', closeSidebar);
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const fixturesContent = document.getElementById('fixtures-content');
    const resultsContent = document.getElementById('results-content');
    const highlightsContent = document.getElementById('highlights-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            // Hide all contents
            fixturesContent.style.display = 'none';
            resultsContent.style.display = 'none';
            highlightsContent.style.display = 'none';

            // Show the selected content
            const tab = this.getAttribute('data-tab');
            if (tab === 'fixtures') {
                fixturesContent.style.display = 'flex';
            } else if (tab === 'results') {
                resultsContent.style.display = 'flex';
            } else if (tab === 'highlights') {
                highlightsContent.style.display = 'flex';
            }
        });
    });
});
