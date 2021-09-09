// Define elements
const sideNav = document.getElementById("sideNav")
const navCloseButton = document.getElementById("navCloseButton")
const navOpenButton = document.getElementById("navOpenButton")
const navLinks = document.querySelectorAll(".nav-link")
const date = document.getElementById('date')

const imageAttributionToggle = document.getElementById('imageAttributionToggle')
const attributionListSymbol = document.getElementById('attributionListSymbol')
const techStackImageAttributionList = document.getElementById('techStackImageAttributionList')

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

// Add event listener for image attribution toggle
imageAttributionToggle.addEventListener('click', () => {
  // if open class is present, remove it, change symbol
  if (techStackImageAttributionList.classList.contains('open')) {
    techStackImageAttributionList.classList.remove('open')
    attributionListSymbol.innerHTML = "+"
  } else {
    // Add open class
    techStackImageAttributionList.classList.add('open')
    attributionListSymbol.innerHTML = '-'
  }


})