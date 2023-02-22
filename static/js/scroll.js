window.addEventListener('scroll', () => {
    const scroll_down = document.querySelector('.scroll-down');
    const scroll_top = window.pageYOffset || document.documentElement.scroll_top;

    const sections = document.querySelectorAll('.hide-scroll');
    let scroll_hide = false;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
        scroll_hide = true;
      }
    });

    if (scroll_top > 0 || scroll_hide) {
        scroll_down.classList.add('hidden');
    } 
    else {
        scroll_down.classList.remove('hidden');
    }
  });