const heroTypewriter = document.getElementById('heroTypewriter');
const typewriterText = `Hello, We're Mission, Prashant..`;
let typing = false;

function typeWriterEffect(element, html, speed = 50) {
  let i = 0;
  let tag = '';
  let isTag = false;
  element.innerHTML = '';
  typing = true;
  function type() {
    if (i < html.length) {
      if (html[i] === '<') {
        isTag = true;
        tag = '';
      }
      if (isTag) {
        tag += html[i];
        if (html[i] === '>') {
          isTag = false;
          element.innerHTML += tag;
          tag = '';
        }
      } else {
        element.innerHTML += html[i];
      }
      i++;
      setTimeout(type, speed);
    } else {
      typing = false;
    }
  }
  type();
}

let hasTyped = false;
const observer = new window.IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !typing) {
        if (!hasTyped) {
          typeWriterEffect(heroTypewriter, typewriterText);
          hasTyped = true;
        }
      } else if (!entry.isIntersecting) {
        hasTyped = false;
      }
    });
  },
  { threshold: 0.5 }
);
observer.observe(document.getElementById('hero')); 