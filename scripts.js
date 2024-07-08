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
