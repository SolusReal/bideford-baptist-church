const submenuToggle = document.querySelectorAll(".mainmenu > li:has(> .submenu) > a")
const toggleSearch = document.querySelector(".searchbar .icon")
const toggleNav = document.querySelector(".toggleNav")
const navbar = document.querySelector(".navbar")
const searchbar = document.querySelector(".searchbar")

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

document.addEventListener("click", event => {
  if (searchbar.classList.contains("active") && !searchbar.contains(event.target)) {
    searchbar.classList.remove("active")
  }
})
