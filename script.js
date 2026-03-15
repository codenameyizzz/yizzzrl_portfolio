const revealItems = document.querySelectorAll('.reveal');
const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const sections = navLinks
  .filter((link) => (link.getAttribute('href') || '').includes('#'))
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
const movingItems = document.querySelectorAll('[data-speed]');
const projectCards = document.querySelectorAll('.project-card');
const awardCards = document.querySelectorAll('.award-card');
const achievementCards = document.querySelectorAll('.achievement-card');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxTitle = document.querySelector('.lightbox-title');
const lightboxDescription = document.querySelector('.lightbox-description');
const lightboxClose = document.querySelector('.lightbox-close');
const awardsMarquee = document.querySelector('.awards-marquee');
const awardsTrack = document.querySelector('.awards-track');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

let lastScrollY = window.scrollY;
let ticking = false;
let motionFrame = null;
const motionState = new Map();

movingItems.forEach((item) => {
  motionState.set(item, {
    currentY: 0,
    currentRotate: 0,
    targetY: 0,
    targetRotate: 0
  });
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateActiveNav() {
  if (!sections.length) {
    return;
  }

  const marker = window.innerHeight * 0.35;

  const sectionLinks = navLinks.filter((link) => (link.getAttribute('href') || '').includes('#'));

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const active = rect.top <= marker && rect.bottom >= marker;

    if (sectionLinks[index]) {
      sectionLinks[index].classList.toggle('active', active);
    }
  });
}

function updateScrollEffects() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

  document.documentElement.style.setProperty('--progress', progress.toFixed(4));
  document.body.dataset.direction = scrollY >= lastScrollY ? 'down' : 'up';

  movingItems.forEach((item) => {
    const speed = Number(item.dataset.speed || 0);
    const rect = item.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
    const y = clamp(centerOffset * speed * -0.12, -90, 90);
    const rotate = item.classList.contains('project-card')
      ? clamp(centerOffset * speed * -0.008, -5, 5)
      : 0;

    const state = motionState.get(item);

    if (state) {
      state.targetY = y;
      state.targetRotate = rotate;
    }
  });

  updateActiveNav();
  lastScrollY = scrollY;

  if (!motionFrame) {
    motionFrame = window.requestAnimationFrame(animateMotion);
  }

  ticking = false;
}

function animateMotion() {
  let shouldContinue = false;

  motionState.forEach((state, item) => {
    state.currentY += (state.targetY - state.currentY) * 0.085;
    state.currentRotate += (state.targetRotate - state.currentRotate) * 0.085;

    if (Math.abs(state.targetY - state.currentY) > 0.08 || Math.abs(state.targetRotate - state.currentRotate) > 0.02) {
      shouldContinue = true;
    }

    item.style.setProperty('--parallax-y', `${state.currentY.toFixed(2)}px`);
    item.style.setProperty('--parallax-rotate', `${state.currentRotate.toFixed(2)}deg`);
  });

  if (shouldContinue) {
    motionFrame = window.requestAnimationFrame(animateMotion);
  } else {
    motionFrame = null;
  }
}

function requestTick() {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
}

projectCards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const tiltY = (x - 0.5) * 10;
    const tiltX = (0.5 - y) * 10;

    card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
    card.style.setProperty('--glow-x', `${(x * 100).toFixed(2)}%`);
    card.style.setProperty('--glow-y', `${(y * 100).toFixed(2)}%`);
  });

  card.addEventListener('pointerleave', () => {
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--glow-x', '50%');
    card.style.setProperty('--glow-y', '50%');
  });
});

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupAwardsMarquee() {
  if (!awardsMarquee || !awardsTrack) {
    return;
  }

  const sourceGroup = awardsTrack.querySelector('.awards-group');

  if (!sourceGroup) {
    return;
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  awardsTrack.querySelectorAll('.awards-group[data-cloned="true"]').forEach((group) => group.remove());

  const marqueeWidth = awardsMarquee.clientWidth;
  const sourceWidth = sourceGroup.getBoundingClientRect().width;

  if (!sourceWidth) {
    return;
  }

  const minimumGroups = Math.max(6, Math.ceil((marqueeWidth * 3) / sourceWidth) + 2);
  const currentGroups = awardsTrack.querySelectorAll('.awards-group').length;

  for (let index = currentGroups; index < minimumGroups; index += 1) {
    const clone = sourceGroup.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.dataset.cloned = 'true';
    clone.querySelectorAll('a').forEach((link) => {
      link.tabIndex = -1;
      const image = link.querySelector('img');

      if (image) {
        image.alt = '';
      }
    });
    awardsTrack.appendChild(clone);
  }

  const loopDistance = sourceGroup.getBoundingClientRect().width;
  const pixelsPerSecond = window.innerWidth <= 760 ? 34 : 46;
  const duration = reducedMotion ? 0 : loopDistance / pixelsPerSecond;

  awardsTrack.style.setProperty('--awards-loop-distance', `${loopDistance}px`);
  awardsTrack.style.setProperty('--awards-duration', `${duration.toFixed(2)}s`);
  awardsTrack.classList.toggle('is-animated', !reducedMotion && loopDistance > 0);
}

if (lightbox && lightboxImage && lightboxTitle && lightboxDescription) {
  awardCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      event.preventDefault();

      const image = card.querySelector('img');
      const title = card.querySelector('.award-overlay strong');
      const description = card.querySelector('.award-overlay span');

      if (!image || !title || !description) {
        return;
      }

      lightboxImage.src = image.getAttribute('src') || '';
      lightboxImage.alt = image.getAttribute('alt') || title.textContent || 'Award image';
      lightboxTitle.textContent = title.textContent || '';
      lightboxDescription.textContent = description.textContent || '';
      lightboxImage.style.display = 'block';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  achievementCards.forEach((card) => {
    card.addEventListener('click', () => {
      lightboxImage.removeAttribute('src');
      lightboxImage.alt = '';
      lightboxImage.style.display = 'none';
      lightboxTitle.textContent = card.dataset.achievementTitle || '';
      lightboxDescription.textContent = card.dataset.achievementDescription || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  lightboxClose?.addEventListener('click', closeLightbox);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
}

window.addEventListener('scroll', requestTick, { passive: true });
window.addEventListener('resize', () => {
  requestTick();
  setupAwardsMarquee();
});
window.addEventListener('load', () => {
  updateScrollEffects();
  setupAwardsMarquee();
});

updateScrollEffects();
setupAwardsMarquee();
