document.addEventListener("DOMContentLoaded", function () {
    // Define an array of objects for your navigation items
    var navItems = [
        { url: "index.html", text: "Home" },
        { url: "services.html", text: "Services" },
        { url: "portfolio.html", text: "Portfolio" },
        { url: "our-team.html", text: "Our Team" }, 
        { url: "contact-us.html", text: "Contact Us" },
        // Add other navigation items here
    ];

    // Get the current URL path
    var currentPath = window.location.pathname;

    // Iterate through the array and check for a match with the current path
    navItems.forEach(function (item) {
        var link = document.querySelector(".navbar-menu a[href='" + item.url + "']");
        if (link) {
            link.classList.toggle("active", currentPath.includes(item.url));
        }
    });
});