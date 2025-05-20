// script.js

// When DOM is loaded, initialize animations and interactions
window.addEventListener('DOMContentLoaded', () => {
    // 1) Floating AI particles
    const particleCount = 40;
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    for (let i = 0; i < particleCount; i++) {
      const dot = document.createElement('span');
      const size = Math.random() * 8 + 4;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.bottom = `-10vh`;
      dot.style.animationDuration = `${12 + Math.random() * 18}s`;
      dot.style.animationDelay = `${-Math.random() * 20}s`;
      particleContainer.append(dot);
    }
    document.body.append(particleContainer);
  
    // 2) Scroll-triggered fade-in
    const faders = document.querySelectorAll('.fade-in');
    const revealOnScroll = () => {
      faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  
    // 3) Hero typing effect reset for loop
    const heroHeading = document.querySelector('.hero h1.typing');
    if (heroHeading) {
      heroHeading.addEventListener('animationend', (e) => {
        if (e.animationName === 'typing') {
          setTimeout(() => {
            heroHeading.classList.remove('typing');
            void heroHeading.offsetWidth; // trigger reflow
            heroHeading.classList.add('typing');
          }, 2000);
        }
      });
    }
  
    // 4) Optional: LLM glitch effect on headings
    const glitchText = (el) => {
      const original = el.textContent;
      const chars = '!<>-_\/[]{}—=+*^?#________';
      let iteration = 0;
      const interval = setInterval(() => {
        el.textContent = original
          .split('')
          .map((c, i) => {
            if (i < iteration) return original[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        if (iteration >= original.length) {
          clearInterval(interval);
          el.textContent = original;
        }
        iteration += 1 / 2;
      }, 30);
    };
  
    // Trigger glitch on hero click
    if (heroHeading) {
      heroHeading.addEventListener('click', () => glitchText(heroHeading));
    }
  });
  