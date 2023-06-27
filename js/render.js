$(document).ready(function() {
  // Hàm nạp nội dung và trả về một Promise
  function loadContent(url) {
    return $.ajax(url);
  }

  // Nạp và chèn header
  loadContent("header.html").done(function(data) {
    $("#header-container").html(data);
  });
  // Nạp và chèn footer
  loadContent("footer.html").done(function(data) {
    $("#footer-container").html(data);
  });
  // Nạp và chèn about
  loadContent("about.html").done(function(data) {
    $("#about-container").html(data);
  });
  // Nạp và chèn team
  loadContent("team.html").done(function(data) {
    $("#team-container").html(data);
  });
  // Nạp và chèn courses
  loadContent("courses.html").done(function(data) {
    $("#courses-container").html(data);
  });
  // Nạp và chèn testimonial
  loadContent("testimonial.html").done(function(data) {
    $("#testimonial-container").html(data);
  });
  // Nạp và chèn 404
  loadContent("404.html").done(function(data) {
    $("#404-container").html(data);
  });
});
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
for (var i = 0; i < navLinks.length; i++) {
var link = navLinks[i];

if (link.getAttribute('href') === window.location.pathname) {
link.classList.add('active');
}
}   
