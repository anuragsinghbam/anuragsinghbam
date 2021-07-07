const aboutSection = document.querySelector('.about-section')
const aboutMeBtn = document.querySelector('.about-me-btn')
const xIcon = document.querySelector('.x-icon')
const navbar = document.querySelector('.navbar')
const socialIcons = document.querySelector('.social-links')
const overlay = document.querySelector('.overlay')
const bodyContainer = document.querySelector('#body-container')
const latestWorks = document.querySelector('.latest-works-link')
const downArrow = document.querySelector('.down-arrow')
const latestWorksArrow = document.querySelector('.latest-works-arrow')
const blackLogo = document.querySelector('.black-logo')

aboutMeBtn.addEventListener('click', () => {
  aboutSection.classList.add('active')
  overlay.classList.add('active')
  navbar.classList.add('hidden')
  navbar.classList.add('hidden')
  socialIcons.classList.add('hidden')
})

xIcon.addEventListener('click', () => {
  aboutSection.classList.remove('active')
  overlay.classList.remove('active')
  navbar.classList.remove('hidden')
  socialIcons.classList.remove('hidden')
})

overlay.addEventListener('click', () => {
  aboutSection.classList.remove('active')
  overlay.classList.remove('active')
  navbar.classList.remove('hidden')
  socialIcons.classList.remove('hidden')
})

canvas.addEventListener('wheel', (e) => {
  window.scrollTo(0, (window.innerHeight * e.deltaY) / Math.abs(e.deltaY) + 5)
})

latestWorks.addEventListener('click', (e) => {
  scrollTo(0, window.innerHeight + 5)
})

downArrow.addEventListener('click', (e) => {
  scrollTo(0, window.innerHeight + 5)
})

latestWorksArrow.addEventListener('click', (e) => {
  scrollTo(0, window.innerHeight + 5)
})

blackLogo.addEventListener('click', (e) => {
  scrollTo(0, 0)
})

// window.scrollTo(0,document.body.scrollHeight);

// new GitHubCalendar('.calendar', 'anuragsinghbam', {
//   responsive: true,
//   tooltips: true,
// })

var swiper = new Swiper('.mySwiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
})
