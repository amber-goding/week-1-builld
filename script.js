const carousel = document.querySelector('.carousel');

if (carousel) {
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const slideContainer = carousel.querySelector('.carousel-slides');
  const toggle = carousel.querySelector('.carousel-toggle');
  const position = carousel.querySelector('.carousel-position');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let paused = reducedMotion.matches;
  let hovered = false;
  let timer;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== current;
    });
    position.textContent = `${current + 1} / ${slides.length}`;
  }

  function updateRotation() {
    window.clearInterval(timer);
    const rotating = !paused && !hovered && !document.hidden;
    toggle.textContent = paused ? 'Play slideshow' : 'Pause slideshow';
    slideContainer.setAttribute('aria-live', rotating ? 'off' : 'polite');
    if (rotating) {
      timer = window.setInterval(() => showSlide(current + 1), 3000);
    }
  }

  toggle.addEventListener('click', () => {
    paused = !paused;
    updateRotation();
  });

  function navigate(direction) {
    paused = true;
    updateRotation();
    showSlide(current + direction);
  }

  carousel.querySelector('.carousel-previous').addEventListener('click', () => navigate(-1));
  carousel.querySelector('.carousel-next').addEventListener('click', () => navigate(1));
  carousel.addEventListener('mouseenter', () => {
    hovered = true;
    updateRotation();
  });
  carousel.addEventListener('mouseleave', () => {
    hovered = false;
    updateRotation();
  });
  carousel.addEventListener('focusin', (event) => {
    if (!carousel.contains(event.relatedTarget)) {
      paused = true;
      updateRotation();
    }
  });
  reducedMotion.addEventListener('change', () => {
    paused = reducedMotion.matches;
    updateRotation();
  });
  document.addEventListener('visibilitychange', updateRotation);
  carousel.querySelector('.carousel-controls').hidden = false;
  updateRotation();
}

const testimonials = document.querySelector('.testimonials-component');

if (testimonials) {
  const grid = testimonials.querySelector('.testimonials-grid');
  const cards = Array.from(grid.children);
  const desktop = window.matchMedia('(min-width: 64rem)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function buildTestimonialTracks() {
    grid.replaceChildren();
    testimonials.classList.toggle('is-animated', !reducedMotion.matches);
    if (reducedMotion.matches) {
      grid.append(...cards);
      return;
    }

    const columnCount = desktop.matches ? 3 : 1;
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      const column = document.createElement('div');
      column.className = 'testimonial-column';
      const track = document.createElement('div');
      track.className = 'testimonial-track';
      const group = document.createElement('div');
      group.className = 'testimonial-group';
      cards.forEach((card, index) => {
        if (index % columnCount === columnIndex) group.append(card);
      });
      // Identical halves, including their trailing gap, make the loop seamless.
      const duplicate = group.cloneNode(true);
      duplicate.setAttribute('aria-hidden', 'true');
      duplicate.inert = true;
      track.append(group, duplicate);
      column.append(track);
      grid.append(column);
    }
  }

  desktop.addEventListener('change', buildTestimonialTracks);
  reducedMotion.addEventListener('change', buildTestimonialTracks);
  buildTestimonialTracks();
}
