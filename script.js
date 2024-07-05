const navigationBar = document.querySelector(".navigationBar");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher","");
navigationBar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    navigationBar.classList.toggle("sticking", !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher)
