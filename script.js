//Sticking navbar
const navigationBar = document.querySelector(".navigationBar");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher","");
navigationBar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    navigationBar.classList.toggle("sticking", !entries[0].isIntersecting)
});
navObserver.observe(scrollWatcher)


//Clicking on navbar links to scroll to section
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.getElementById(this.getAttribute('href').substring(1));
      const offset = targetSection.offsetTop;
      
      const navBar = document.getElementById("navigationBar");
      const navBarHeight = navBar.offsetHeight;
      const adjustedOffset = offset - navBarHeight - 30;

      window.scrollTo({
        top: adjustedOffset,
        behavior: "smooth"
        });
    });
});

//contactButton click
const contactButton = document.querySelector(".contactButton");
const contactSection = document.getElementById("contact");
const navBar = document.getElementById("navigationBar");

const contactHeight = contactSection.offsetTop;
const adjustedContact = contactHeight - (navBar.offsetHeight) - 30;

contactButton.onclick = function() {
    window.scrollTo({
        top: adjustedContact,
        behavior: "smooth"
        });
}


//Typing out name
const typewriter = new Typewriter('#nameTitle', {
    delay: 50,
    pauseFor: 0,
    cursor: "",
    cursorClassName: 'typewriterCursor'
});

typewriter
    .start()
    .typeString('Oscar Rodriguez');