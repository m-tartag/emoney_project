// Typed.js Local Changes //

const typed = new Typed('.type', {
  strings: [
    'Build Collaborative Client Relationships',
    'Stay Ahead of the Innovation Curve',
    'Drive Revenue and Growth',
    'Edge Out the Competition',
    'Create More Plans for More Clients',
    'See and Manage the Big Picture',
  ],
  typeSpeed: 40,
  backSpeed: 30,
  loop: true,
});

// NavBar //

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navbar').style.padding = '30px 10px';
    document.getElementById('logo').style.fontSize = '25px';
  } else {
    document.getElementById('navbar').style.padding = '80px 10px';
    document.getElementById('logo').style.fontSize = '35px';
  }
}
