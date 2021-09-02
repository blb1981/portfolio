// Define elements
const sideNav = document.getElementById("sideNav")
const navCloseButton = document.getElementById("navCloseButton")
const navOpenButton = document.getElementById("navOpenButton")
const navLinks = document.querySelectorAll(".nav-link")
const date = document.getElementById('date')

// Assign event listeners for side menu open/close
navCloseButton.addEventListener("click", () => {
  sideNav.classList.toggle("nav-open")
})
navOpenButton.addEventListener("click", () => {
  sideNav.classList.toggle("nav-open")
})

// Close menu upon click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideNav.classList.remove("nav-open")
  })
})

// Date
const now = new Date()
const year = now.getFullYear()

date.innerHTML = year
