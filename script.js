//Sticking navbar
const navigationBar = document.querySelector(".navigationBar");
const navBar = document.querySelector('#navigationBar');
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

      if(window.innerWidth <= 910) {
        window.scrollTo({
            top: offset - 20,
            behavior: "smooth"
            });
      }
      else {
        window.scrollTo({
            top: adjustedOffset,
            behavior: "smooth"
            });
      }
    });
});


//Toggle SideBar
const sideMenuElement = document.querySelector('#navigationBar .sideMenu')
sideMenuElement.onclick = function() {
    const navBar = document.querySelector('#navigationBar')
    const sideMenuItems = navBar.querySelectorAll('li')

    sideMenuItems.forEach(item => {
        if(item != sideMenuElement) {
            item.classList.toggle('navItem');
        }
    });
    navBar.classList.toggle('navBarHeight');
}


//Closing the sideBar if clicking out of it
const sideMenuItems = navBar.querySelectorAll('.navItem')

document.onclick = function(event) {
    const hasNavItemClass = [...sideMenuItems].some(item => item.classList.contains('navItem'));
    if(hasNavItemClass == false) {
        if (!event.target.closest('#navigationBar')) {
            sideMenuItems.forEach(item => {
                if(item != sideMenuElement) {
                    item.classList.toggle('navItem');
                }
            });
            navBar.classList.toggle('navBarHeight');
        }
    }
}


//Hide SideBar if item clicked
const navItems = navBar.querySelectorAll('.navItem')

function toggleNavItemVisibility () {
    if(window.innerWidth <= 950) {
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navItems.forEach(item => {
                    item.classList.toggle('navItem');
                })
                navBar.classList.toggle('navBarHeight');
            })
        })
    }
}
toggleNavItemVisibility();



//contactButton click
const contactButton = document.querySelector(".contactButton");
const contactSection = document.getElementById("contact");

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