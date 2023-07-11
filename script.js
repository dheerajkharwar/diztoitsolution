// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        var targetOffset = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
    });
  }
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // TODO: Handle form submission logic (e.g., send data to server, show success message)
    });
  }
});
