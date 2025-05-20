document.addEventListener('DOMContentLoaded', ()=> {
    // 1) generate floating particles
    const count = 30;
    const container = document.createElement('div');
    container.className = 'particles';
    for(let i=0;i<count;i++) {
      const p = document.createElement('span');
      const size = Math.random()*8 + 4;
      p.style.width  = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left   = `${Math.random()*100}vw`;
      p.style.bottom = `-10vh`;
      p.style.animationDuration = `${20 + Math.random()*10}s`;
      container.appendChild(p);
    }
    document.body.appendChild(container);
  
    // 2) scroll-reveal
    const faders = document.querySelectorAll('.fade-in');
    const revealOnScroll = () => {
      faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) el.classList.add('visible');
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  
    // 3) hero typing reset (for repeat demo, optional)
    const hero = document.querySelector('.hero h1');
    if(hero) {
      hero.addEventListener('animationend', ()=> {
        setTimeout(()=>{
          hero.classList.remove('typing');
          void hero.offsetWidth;
          hero.classList.add('typing');
        }, 2000);
      });
    }
  });
  