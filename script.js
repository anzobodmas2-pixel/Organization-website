const newsItems = [
  {
    title: 'Community-led Wetland Restoration Begins in Madi',
    description: 'TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT partners with local leaders to revive wetlands and protect water sources.'
  },
  {
    title: 'Training 200 Farmers in Climate-smart Agriculture',
    description: 'Farmers from West Nile learn resilient cropping practices and land stewardship skills.'
  },
  {
    title: 'New Land Rights Report Published',
    description: 'A fresh report details progress on tenure security and community advocacy in Northern Uganda.'
  }
];

const resourceItems = [
  {
    title: 'Publications & Annual Reports',
    description: 'A library of TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT research and evidence summaries for partners and policy actors.'
  },
  {
    title: 'Land Rights Advocacy Toolkit',
    description: 'Practical guidance for community defenders and local governance committees.'
  },
  {
    title: 'Climate Justice Brief',
    description: 'Insights into equitable adaptation and accountability approaches in the region.'
  }
];

const programDetails = {
  environment: {
    title: 'Environment & Conservation',
    summary: 'TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT supports local stewards to restore wetlands, protect forests, and manage resources sustainably.',
    points: [
      'Community-led forest and wetland restoration efforts.',
      'Training on sustainable harvesting and biodiversity monitoring.',
      'Support for local natural resource governance structures.'
    ]
  },
  'land-rights': {
    title: 'Land Rights',
    summary: 'We defend customary land access through legal support, documentation and community mediation.',
    points: [
      'Supporting secure land tenure for women and vulnerable households.',
      'Facilitating rights education and dispute resolution.',
      'Engaging local authorities to formalise community land agreements.'
    ]
  },
  'climate-justice': {
    title: 'Climate Justice',
    summary: 'TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT amplifies community voices in climate policy and helps households adapt to changing weather.',
    points: [
      'Training farmers on climate-smart agriculture.',
      'Elevating local experiences in advocacy spaces.',
      'Promoting equitable access to climate adaptation funding.'
    ]
  },
  'water-wetlands': {
    title: 'Water & Wetlands',
    summary: 'Our work strengthens water governance, protects wetland ecosystems, and improves access to safe water.',
    points: [
      'Monitoring wetland health and community water supply systems.',
      'Building local committees to manage water resources.',
      'Supporting interventions that protect wetlands from misuse.'
    ]
  },
  'social-accountability': {
    title: 'Social Accountability',
    summary: 'We enable communities to track service delivery and hold leaders accountable for public resource decisions.',
    points: [
      'Training citizens on monitoring public services.',
      'Building transparency through community scorecards.',
      'Facilitating dialogue between communities and local officials.'
    ]
  },
  'publications-reports': {
    title: 'Publications & Reports',
    summary: 'TRGD shares evidence and practical guidance to inspire better governance across the region.',
    points: [
      'Publishing annual reports on land rights and natural resource governance.',
      'Sharing research that informs policy and community advocacy.',
      'Providing accessible guides for local leaders and partners.'
    ]
  }
};

const teamMembers = [
  {
    name: 'Dr. Joyce Moriku Kaducu',
    role: 'Board Chair',
    category: 'Board of Directors',
    photo: 'Joyce.jpeg'
  },
  {
    name: 'Esther Toloa',
    role: 'Director of Programs',
    category: 'Board of Directors',
    photo: 'Lucy.jpeg'
  },
  {
    name: 'Richard Vonze Chancellor',
    role: 'Executive Director',
    category: 'Board of Directors',
    photo: 'Richard.jpeg'
  }
];

const socialPreviews = {
  tiktok: {
    title: 'TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT on TikTok',
    body: 'Follow @trgd760 on TikTok for short highlights from training sessions, field visits, and community-led governance updates.',
    handle: '@trgd760',
    url: 'https://tiktok.com/@trgd760'
  },
  facebook: {
    title: 'TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT on Facebook',
    body: 'See stories from communities, training highlights, and event announcements.'
  },
  instagram: {
    title: 'TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT on Instagram',
    body: 'Explore visual stories that showcase local impact, events, and program outcomes in Northern Uganda.'
  },
  x: {
    title: 'TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT on X',
    body: 'Follow TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT for real-time updates on community governance, land rights, and climate justice work.'
  }
};

function renderItems(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map((item, index) => `
    <article class="item-card" style="--card-delay:${index * 120}ms">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join('');
}

function renderTeam(items = teamMembers) {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  
  const groupedMembers = items.reduce((acc, member, index) => {
    const group = member.category === 'Board of Directors' ? 'Board' : 'Staff';
    if (!acc[group]) acc[group] = { members: [], startIndex: 0 };
    if (acc[group].members.length === 0) acc[group].startIndex = index;
    acc[group].members.push({ ...member, originalIndex: index });
    return acc;
  }, {});
  
  let html = '';
  
  if (groupedMembers.Board) {
    html += '<div class="team-group"><div class="team-group-cards">';
    html += groupedMembers.Board.members.map((member, idx) => `
      <article class="team-card" style="animation-delay: ${(groupedMembers.Board.startIndex + idx) * 120}ms;">
        <div class="team-card__photo">
          <img src="${member.photo}" alt="${member.name} profile photo" loading="lazy">
          <div class="team-card__overlay"></div>
        </div>
        <div class="team-card__info">
          <h3>${member.name}</h3>
          <p class="team-card__role">${member.role}</p>
        </div>
      </article>
    `).join('');
    html += '</div></div>';
  }
  
  grid.innerHTML = html;
}

function initTeamSectionAnimations() {
  const section = document.querySelector('.team-section');
  const cards = document.querySelectorAll('.team-section .team-card');
  if (!section || cards.length === 0) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => {
          card.classList.add('visible');
          card.style.animation = `fadeInTeamCard 0.7s ease forwards ${index * 120}ms`;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);

  section.addEventListener('mousemove', event => {
    const rect = section.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const tilt = (x - 0.5) * 10;
    cards.forEach((card, index) => {
      card.style.transform = `translateY(0) translateX(${tilt * (index % 2 ? -1 : 1)}px)`;
    });
  });

  section.addEventListener('mouseleave', () => {
    cards.forEach(card => {
      card.style.transform = 'translateY(0)';
    });
  });
}

function renderProgramDetail(key) {
  const detailSection = document.getElementById('program-detail-section');
  const detailContainer = document.getElementById('program-detail-content');
  if (!detailSection || !detailContainer || !programDetails[key]) return;

  const detail = programDetails[key];
  detailContainer.innerHTML = `
    <h3>${detail.title}</h3>
    <p>${detail.summary}</p>
    <ul>${detail.points.map(point => `<li>${point}</li>`).join('')}</ul>
  `;
  detailSection.hidden = false;
  const panel = document.querySelector('.program-detail-panel');
  if (panel) {
    panel.classList.remove('animate-out');
    void panel.offsetWidth;
    panel.classList.add('animate-in');
  }
  detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeProgramDetail() {
  const detailSection = document.getElementById('program-detail-section');
  const panel = document.querySelector('.program-detail-panel');
  if (!detailSection) return;
  if (panel) {
    panel.classList.remove('animate-in');
    panel.classList.add('animate-out');
    setTimeout(() => {
      detailSection.hidden = true;
    }, 350);
  } else {
    detailSection.hidden = true;
  }
}

function handleProgramLearnMore() {
  const buttons = document.querySelectorAll('.program-learn-more');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const concept = button.dataset.concept;
      renderProgramDetail(concept);
    });
  });

  const closeButton = document.getElementById('detail-close');
  if (closeButton) {
    closeButton.addEventListener('click', closeProgramDetail);
  }
}

function showSocialPreview(platform) {
  const preview = document.getElementById('social-preview');
  if (!preview || !socialPreviews[platform]) return;
  preview.innerHTML = `
    <h3>${socialPreviews[platform].title}</h3>
    <p>${socialPreviews[platform].body}</p>
    <p class="small-note">Preview only — live feed integration can be added with API access.</p>
  `;
  preview.classList.add('visible');
}

function handleSocialLinks() {
  const links = document.querySelectorAll('.social-link');
  links.forEach(link => {
    link.addEventListener('click', event => {
      const platform = link.dataset.platform;
      
      // For TikTok, open directly to the official account
      if (platform === 'tiktok') {
        return; // Allow default link behavior - opens in new tab
      }
      
      // For other platforms show preview
      event.preventDefault();
      showSocialPreview(platform);
    });
  });
  document.addEventListener('click', event => {
    const preview = document.getElementById('social-preview');
    if (preview && !event.target.closest('.footer-links') && !event.target.closest('.social-preview')) {
      preview.classList.remove('visible');
    }
  });
}

function initMap() {
  const mapContainer = document.getElementById('region-map');
  if (!window.L || !mapContainer) {
    if (mapContainer) {
      mapContainer.innerHTML = '<div class="map-fallback">Interactive map currently unavailable. Please refresh or check your internet connection.</div>';
    }
    return;
  }

  const map = L.map('region-map', {
    center: [2.5, 31.5],
    zoom: 8,
    scrollWheelZoom: false,
    attributionControl: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(map);

  const locations = [
    {
      region: 'West Nile',
      coords: [3.02, 31.46],
      note: 'Community hubs, training and governance monitoring.'
    },
    {
      region: 'Madi',
      coords: [2.34, 31.79],
      note: 'Land rights and climate resilience programming.'
    },
    {
      region: 'Moyo District',
      coords: [3.65, 31.72],
      note: 'Moyo District operates as a strategic TRGD hub.',
      link: '#where-we-work'
    }
  ];

  const bounds = L.latLngBounds(locations.map(location => location.coords));

  locations.forEach(location => {
    const popupContent = `<strong>${location.region}</strong><br>${location.note}` +
      (location.link ? `<br><a href="${location.link}">View Where We Work</a>` : '');

    L.circle(location.coords, {
      color: '#23472f',
      fillColor: '#4a7b56',
      fillOpacity: 0.45,
      radius: location.region === 'Moyo District' ? 14000 : 30000
    }).addTo(map).bindPopup(popupContent);

    if (location.region === 'Moyo District') {
      L.marker(location.coords, {
        title: location.region
      }).addTo(map).bindPopup(popupContent);
    }
  });

  map.fitBounds(bounds, { padding: [40, 40] });
}

const apiBase = window.location.origin;

async function postJson(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || 'Request failed');
  }
  return response.json();
}

async function fetchJson(url, fallback = []) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Fetch failed');
    }
    return response.json();
  } catch (error) {
    return fallback;
  }
}

function handleSubscriptionForm() {
  const form = document.getElementById('subscribe-form');
  const message = document.getElementById('form-message');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const region = form.elements.region.value;
    const text = form.elements.message.value.trim();

    if (!name || !email || !region || !text) {
      message.textContent = 'Please complete all fields before sending your message.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      message.textContent = 'Please enter a valid email address.';
      return;
    }

    message.textContent = 'Sending your message…';
    try {
      await postJson(`${apiBase}/api/contacts`, { name, email, region, message: text });
      message.textContent = 'Thank you! Your message has been received.';
      form.reset();
    } catch (error) {
      message.textContent = `Unable to send message: ${error.message}`;
    }
  });
}

async function loadDynamicContent() {
  const news = await fetchJson(`${apiBase}/api/news`, newsItems);
  const features = await fetchJson(`${apiBase}/api/features`, resourceItems);
  const team = await fetchJson(`${apiBase}/api/team`, teamMembers);

  renderItems('news-list', news);
  renderItems('resources-list', features);
  renderTeam(team);
}

function handleNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('main [id]');
  const navLinks = document.querySelectorAll('.site-nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.site-nav a[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', entry.isIntersecting);
      }
    });
  }, { threshold: 0.45 });
  sections.forEach(section => observer.observe(section));
}

function applyRevealClasses() {
  const targets = [
    '.hero-content',
    '.section-header',
    '.about-grid article',
    '.about-visual',
    '.vision-visual',
    '.card',
    '.team-card',
    '.item-card',
    '.region-map',
    '.subscribe-card',
    '.donate-panel',
    '.footer-inner',
    '.program-detail-panel'
  ];

  targets.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.classList.add('reveal');
    });
  });
}

function handlePageTransitions() {
  const body = document.body;
  body.classList.add('page-ready');

  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();
      body.classList.add('page-exit');
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        body.classList.remove('page-exit');
      }, 220);
    });
  });
}

function handleHeaderOnScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  reveals.forEach(element => revealObserver.observe(element));
}

function initBlogBackgroundMotion() {
  const blogSection = document.querySelector('.news-resources-section');
  if (!blogSection) return;

  function updateBlogBg() {
    const rect = blogSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.bottom < 0 || rect.top > windowHeight) return;

    const progress = Math.min(1, Math.max(0, 1 - rect.top / windowHeight));
    const posX = 50 + progress * 6;
    const overlay = 0.78 - progress * 0.16;

    blogSection.style.setProperty('--blog-bg-pos', `${posX}% center`);
    blogSection.style.setProperty('--blog-overlay', `${overlay}`);
  }

  updateBlogBg();
  window.addEventListener('scroll', updateBlogBg, { passive: true });
}

function initBlogInteractions() {
  const blogSection = document.querySelector('.news-resources-section');
  if (!blogSection) return;

  const cards = document.querySelectorAll('.news-resources-section .item-card');
  cards.forEach((card, index) => {
    card.style.setProperty('--card-delay', `${index * 120}ms`);
  });

  blogSection.addEventListener('mousemove', event => {
    const rect = blogSection.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const tilt = (x - 0.5) * 10;
    cards.forEach((card, idx) => {
      card.style.transform = `translateY(0) translateX(${tilt * (idx % 2 ? -1 : 1)}px)`;
    });
  });

  blogSection.addEventListener('mouseleave', () => {
    cards.forEach(card => {
      card.style.transform = '';
    });
  });
}

function addBlogHighlights() {
  const blogHeader = document.querySelector('.news-resources-section .section-header');
  if (!blogHeader) return;

  const highlight = document.createElement('div');
  highlight.className = 'blog-highlight';
  highlight.innerHTML = 'Featured story: the latest blog update highlights how community water and wetland action is shaping stronger local governance and climate resilience.';
  blogHeader.appendChild(highlight);
}

function initContactSectionAnimation() {
  const contactShell = document.querySelector('.contact-shell');
  if (!contactShell) return;

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactShell.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealObserver.observe(contactShell);

  const inputs = contactShell.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => contactShell.classList.add('input-focus'));
    input.addEventListener('blur', () => contactShell.classList.remove('input-focus'));
  });
}

function closeMobileNav() {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadDynamicContent();
  handleSubscriptionForm();
  handleNavToggle();
  handleSocialLinks();
  handleProgramLearnMore();
  initScrollSpy();
  applyRevealClasses();
  initRevealAnimations();
  initContactSectionAnimation();
  handlePageTransitions();
  handleHeaderOnScroll();
  initBlogBackgroundMotion();
  addBlogHighlights();
  initBlogInteractions();
  initTeamSectionAnimations();
  closeMobileNav();
});
