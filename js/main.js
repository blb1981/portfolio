// Define elements
const sideNav = document.getElementById("sideNav")
const navCloseButton = document.getElementById("navCloseButton")
const navOpenButton = document.getElementById("navOpenButton")
const navLinks = document.querySelectorAll(".nav-link")
const date = document.getElementById("date")

const imageAttributionToggle = document.getElementById("imageAttributionToggle")
const attributionListSymbol = document.getElementById("attributionListSymbol")
const techStackImageAttributionList = document.getElementById("techStackImageAttributionList")

// Assign event listeners for side menu open/close
navCloseButton.addEventListener("click", () => {
  sideNav.classList.toggle("nav-open")
})
navOpenButton.addEventListener("click", () => {
  sideNav.classList.toggle("nav-open")
})

// Date
const now = new Date()
const year = now.getFullYear()

date.innerHTML = year

// Add event listener for image attribution toggle
imageAttributionToggle.addEventListener("click", () => {
  // if open class is present, remove it, change symbol
  if (techStackImageAttributionList.classList.contains("open")) {
    techStackImageAttributionList.classList.remove("open")
    attributionListSymbol.innerHTML = "+"
  } else {
    // Add open class
    techStackImageAttributionList.classList.add("open")
    attributionListSymbol.innerHTML = "-"
  }
})

// Smooth scroll, side nav menu
const scrollLinksSide = document.querySelectorAll(".scroll-link-side")
scrollLinksSide.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    sideNav.classList.remove("nav-open")
    // Get element of the individual link clicked
    const id = link.getAttribute("href").slice(1)
    const element = document.getElementById(id)
    let position = element.offsetTop
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    })
  })
})

// Smooth scroll, top nav menu
const scrollLinkTop = document.querySelectorAll(".scroll-link-top")
scrollLinkTop.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const id = link.getAttribute("href").slice(1)
    const element = document.getElementById(id)
    let position = element.offsetTop - 64
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    })
  })
})

// Smooth scroll, footer links
const scrollLinksFooter = document.querySelectorAll(".scroll-link-footer")
scrollLinksFooter.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const id = link.getAttribute("href").slice(1)
    const element = document.getElementById(id)
    const topNav = document.querySelector(".top-nav")
    let offset = topNav.clientHeight
    let position = element.offsetTop - offset
    console.log('scrolling to ', position)
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    })
  })
})
