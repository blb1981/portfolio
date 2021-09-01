// setup nav
const navBtn = document.getElementById("nav-btn")
const navbar = document.getElementById("navbar")
const navClose = document.getElementById("nav-close")
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav")
})
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav")
})
//setup date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear())
//handle form submission
const contactForm = document.getElementById("contactForm")
let contactName = document.getElementById("contactName")
let contactEmail = document.getElementById("contactEmail")
let contactMessage = document.getElementById("contactMessage")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  contactName.value = ""
  contactEmail.value = ""
  contactMessage.value = ""
  alert("Thanks for your submission!")
})
