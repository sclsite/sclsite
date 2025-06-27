document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('.nav-buttons a');

    scrollLinks.forEach(function (scrollLink) {
        scrollLink.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = scrollLink.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});