const submenuToggle = document.querySelectorAll(".mainmenu > li:has(> .submenu) > a")
const toggleSearch = document.querySelector(".searchbar .icon")
const toggleNav = document.querySelector(".toggleNav")
const navbar = document.querySelector(".navbar")

submenuToggle.forEach(submenu => {
  submenu.addEventListener("click", event => {
    event.preventDefault()
    const currentSubmenu = event.currentTarget.nextElementSibling;
    
    document.querySelectorAll(".submenu.active").forEach(openSubmenu => {
      if (openSubmenu !== currentSubmenu) {
        openSubmenu.classList.remove("active");
      }
    });
    
    currentSubmenu.classList.toggle("active");
  })
})

toggleSearch.addEventListener("click", event => {
  event.currentTarget.parentElement.classList.toggle("active")
})

toggleNav.addEventListener("click", event => {
  navbar.classList.toggle("active")
})

/*
yes
You feel satisfied with everything here on this design?
*/