// Toggle icon for white mode
const toggleBtn = document.getElementById("toggleBtn");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("white-mode");

    if (document.body.classList.contains("white-mode")) {
        icon.classList.remove("fa-toggle-on");
        icon.classList.add("fa-toggle-off");
    } else {
        icon.classList.remove("fa-toggle-off");
        icon.classList.add("fa-toggle-on");
    }
});

// Scroll section active link highlighting
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
            });
        }
    });

    // Sticky navbar effect
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 100);
    }
};

// Navbar toggle (open/close)
const menuIcon = document.getElementById('menu-icon'); // Assuming 'menu-icon' is the ID for your menu toggle
const navbar = document.querySelector('.navbar'); // Navbar selector

menuIcon.addEventListener('click', function () {
    if (navbar.classList.contains('active')) {
        // Close the navbar and revert to the hamburger icon
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } else {
        // Open the navbar and switch to the 'X' mark
        navbar.classList.add('active');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    }
});

//scroll reveal
ScrollReveal({
    reset: true, // Animation happens every time element is in view
    distance: '60px',
    duration: 2000,
    delay: 100
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  //types js
  let typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Backend Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
  });
