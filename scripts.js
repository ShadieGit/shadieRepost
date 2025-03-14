document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content');
  const modeToggle = document.getElementById('mode-toggle');
  const images = document.querySelectorAll('img');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if(this.classList.contains('active')) return;
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      const targetId = this.getAttribute('data-target');
      const currentContent = document.querySelector('.content.active');
      const newContent = document.getElementById(targetId);
      if(currentContent) {
        currentContent.classList.remove('active');
        setTimeout(() => {
          newContent.classList.add('active');
        }, 400);
      } else {
        newContent.classList.add('active');
      }
    });
  });
  modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
  });
  images.forEach(image => {
    image.setAttribute('draggable', 'false');
    image.addEventListener('contextmenu', e => e.preventDefault());
    image.addEventListener('mousedown', e => e.preventDefault());
    image.addEventListener('touchstart', e => e.preventDefault());
  });
  document.body.addEventListener('selectstart', e => e.preventDefault());
  document.body.addEventListener('contextmenu', e => e.preventDefault());
  initCarousel();
  showNotification('Welcome to ShadieVerse');
});
function showNotification(message) {
  const container = document.getElementById('notification-container');
  const note = document.createElement('div');
  note.classList.add('notification');
  note.textContent = message;
  container.appendChild(note);
  setTimeout(() => {
    note.style.opacity = 0;
    setTimeout(() => note.remove(), 500);
  }, 3000);
}
function copyRobloxScript() {
  const scriptContent = document.getElementById('roblox-script').textContent;
  navigator.clipboard.writeText(scriptContent)
    .then(() => { showNotification('Script copied to clipboard.'); })
    .catch(() => { showNotification('Failed to copy script.'); });
}
function initCarousel() {
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  if (!carouselWrapper) return;
  let index = 0;
  const slides = carouselWrapper.querySelectorAll('img');
  const total = slides.length;
  setInterval(() => {
    index = (index + 1) % total;
    carouselWrapper.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
}