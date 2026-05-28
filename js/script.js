const CAROUSEL_DATA = {
  mobs: [
    {
      title: 'Creeper',
      badge: 'HOSTILE',
      badgeStyle: 'background:#2e7d3244;color:#a5d6a7;border:1px solid #2e7d32',
      img: 'images/creeper.png',
      fallback: '&#128163;',
      fallbackBg: 'mob-bg-creeper',
      desc: 'Explodes when near players. Known for its characteristic "hiss" before detonation, the Creeper is one of the most iconic and feared mobs. It was originally created by accident — a failed pig model — by Notch himself.',
    },
    {
      title: 'Zombie',
      badge: 'HOSTILE',
      badgeStyle: 'background:#2e7d3244;color:#a5d6a7;border:1px solid #2e7d32',
      img: 'images/zombie.png',
      fallback: '&#129503;',
      fallbackBg: 'mob-bg-zombie',
      desc: 'Common slow enemy mob that spawns at night and burns in sunlight. Zombies can break down wooden doors on Hard mode, making them a genuine threat to early-game bases. They also spawn variants like Drowned and Husks.',
    },
    {
      title: 'Skeleton',
      badge: 'HOSTILE',
      badgeStyle: 'background:#2e7d3244;color:#a5d6a7;border:1px solid #2e7d32',
      img: 'images/skeleton.png',
      fallback: '&#128128;',
      fallbackBg: 'mob-bg-skeleton',
      desc: 'Shoots arrows from a distance with remarkable accuracy. Skeletons strafe while attacking and will seek shade or water to avoid burning in daylight. They can pick up armor and weapons dropped by players.',
    },
    {
      title: 'Spider',
      badge: 'HOSTILE',
      badgeStyle: 'background:#2e7d3244;color:#a5d6a7;border:1px solid #2e7d32',
      img: 'images/spider.png',
      fallback: '&#128375;',
      fallbackBg: 'mob-bg-spider',
      desc: 'A fast mob that climbs walls and squeezes through small gaps. Neutral in daylight, hostile at night. Cave Spiders — found in mineshafts — are even more dangerous, inflicting poison on contact.',
    },
    {
      title: 'Enderman',
      badge: 'HOSTILE',
      badgeStyle: 'background:#2e7d3244;color:#a5d6a7;border:1px solid #2e7d32',
      img: 'images/enderman.png',
      fallback: '&#128420;',
      fallbackBg: 'mob-bg-enderman',
      desc: 'A tall, dark creature that teleports at will and avoids water. Becomes hostile when looked in the eyes — wearing a pumpkin on your head prevents this. Endermen can pick up and place blocks, slowly reshaping the world.',
    },
    {
      title: 'Witch',
      badge: 'HOSTILE',
      badgeStyle: 'background:#2e7d3244;color:#a5d6a7;border:1px solid #2e7d32',
      img: 'images/witch.png',
      fallback: '&#129497;',
      fallbackBg: 'mob-bg-witch',
      desc: 'Uses potions as weapons, throwing Splash Potions of Harming, Slowness, and Poison. When injured, witches drink healing or fire-resistance potions to survive longer. They spawn naturally in Witch Huts in swamp biomes.',
    },
  ],

  biomes: [
    {
      title: 'Forest',
      badge: 'COMMON',
      badgeStyle: 'background:#1b5e2044;color:#81c784;border:1px solid #1b5e20',
      img: 'images/forest.png',
      fallback: '&#127794;',
      fallbackBg: 'biome-bg-forest',
      desc: 'A lush green biome filled with oak and birch trees, wolves, rabbits, and bees. Forests are ideal early-game biomes offering abundant wood. The Flower Forest sub-biome is one of the most beautiful in the game.',
    },
    {
      title: 'Plains',
      badge: 'COMMON',
      badgeStyle: 'background:#1b5e2044;color:#81c784;border:1px solid #1b5e20',
      img: 'images/plains.png',
      fallback: '&#127806;',
      fallbackBg: 'biome-bg-plains',
      desc: 'Open, flat land covered in grass and flowers. Villages spawn here frequently, giving players early access to trades, beds, and food. Plains are the best biome for new players to start their first base.',
    },
    {
      title: 'Desert',
      badge: 'HOT',
      badgeStyle: 'background:#f9a82522;color:#ffe082;border:1px solid #f9a825',
      img: 'images/desert.png',
      fallback: '&#127797;',
      fallbackBg: 'biome-bg-desert',
      desc: 'A hot, dry expanse of sand and sandstone. Desert Temples hide four chests full of loot behind a deadly pressure-plate TNT trap. No rain falls here, and hostile Husks replace zombies, able to inflict Hunger.',
    },
    {
      title: 'Jungle',
      badge: 'RARE',
      badgeStyle: 'background:#1b5e2044;color:#81c784;border:1px solid #1b5e20',
      img: 'images/jungle.png',
      fallback: '&#129436;',
      fallbackBg: 'biome-bg-jungle',
      desc: 'Dense, towering trees with hanging vines and thick undergrowth. Jungle Temples contain dual dispensers loaded with arrows and hidden chests. Parrots, ocelots, and pandas exclusively spawn here.',
    },
    {
      title: 'Mountains',
      badge: 'ELEVATED',
      badgeStyle: 'background:#37474f44;color:#90a4ae;border:1px solid #546e7a',
      img: 'images/mountains.png',
      fallback: '&#9968;',
      fallbackBg: 'biome-bg-mountains',
      desc: 'Dramatic high-altitude terrain with exposed stone, snow caps, and jagged peaks. Emerald ore — the rarest overworld ore — generates exclusively here. Goats leap across the rocky faces and can ram players off ledges.',
    },
    {
      title: 'Taiga',
      badge: 'COLD',
      badgeStyle: 'background:#0d1f3344;color:#80cbc4;border:1px solid #00695c',
      img: 'images/taiga.png',
      fallback: '&#127784;',
      fallbackBg: 'biome-bg-taiga',
      desc: 'A cold, spruce-forested biome where wolves and foxes roam freely. Taiga villages use spruce wood architecture and contain unique crops like sweet berries. The Snowy Taiga sub-biome features frozen lakes and powder snow.',
    },
  ],

  seeds: [
    {
      title: 'Village Spawn Seed',
      badge: 'SURVIVAL',
      badgeStyle: 'background:#1b5e2044;color:#a5d6a7;border:1px solid #2e7d32',
      img: 'images/village_seed.png',
      fallback: '&#127960;',
      fallbackBg: 'biome-bg-plains',
      desc: 'Spawn directly inside or beside a populated village. Loot the chests, trade with villagers from day one, and use the pre-built beds to skip your first dangerous night. One of the most beginner-friendly seeds available.',
      seedNumber: '6630997395534342573',
    },
    {
      title: 'Mountain Valley Seed',
      badge: 'SCENIC',
      badgeStyle: 'background:#37474f44;color:#90a4ae;border:1px solid #546e7a',
      img: 'images/mountain_valley_seed.png',
      fallback: '&#127956;',
      fallbackBg: 'biome-bg-mountains',
      desc: 'A breathtaking valley carved between towering mountain peaks. Natural rivers flow through the basin providing beauty and utility. The mountains offer emerald deposits and natural shelter for a stunning base.',
      seedNumber: '5101553622029575588',
    },
    {
      title: 'Speedrun Seed',
      badge: 'COMPETITIVE',
      badgeStyle: 'background:#f9a82522;color:#ffe082;border:1px solid #f9a825',
      img: 'images/speedrun_seed.png',
      fallback: '&#9889;',
      fallbackBg: 'biome-bg-desert',
      desc: 'Optimized for fast game completion. The stronghold is located unusually close to spawn, and nearby villages provide early iron and food. Used by speedrunners seeking sub-20-minute records. Loot is exceptional.',
      seedNumber: '1679041161551979355',
    },
    {
      title: 'Survival Island Seed',
      badge: 'CHALLENGE',
      badgeStyle: 'background:#0d1a3a44;color:#81d4fa;border:1px solid #0277bd',
      img: 'images/survival_island_seed.png',
      fallback: '&#127965;',
      fallbackBg: 'mob-bg-enderman',
      desc: 'Spawn on a tiny island with minimal trees and no immediate mainland access. Every resource is precious. Fishing becomes essential. A true test of survival skill and creativity — highly recommended for veterans.',
      seedNumber: '-2905686047069235898',
    },
    {
      title: 'Cave System Seed',
      badge: 'EXPLORER',
      badgeStyle: 'background:#0d0d0d44;color:#bdbdbd;border:1px solid #424242',
      img: 'images/cave_system_seed.png',
      fallback: '&#128371;',
      fallbackBg: 'mob-bg-skeleton',
      desc: 'Generates enormous interconnected cave networks near spawn. Massive caverns reveal exposed ore veins and dramatic underground vistas. Perfect for deep mining sessions and discovering rare Ancient City structures.',
      seedNumber: '6002410844389446864',
    },
  ],

  creators: [
    {
      title: 'Dream',
      badge: 'SPEEDRUNNER',
      badgeStyle: 'color:var(--mc-green);background:#0a2010;border:1px solid #2e7d32',
      img: 'images/creator_dream.png',
      fallback: '&#127917;',
      fallbackBg: 'biome-bg-forest',
      desc: 'One of the most subscribed Minecraft creators on YouTube. Dream became iconic for his Minecraft Manhunt series where he attempts to beat the game while friends hunt him. He also hosts the Minecraft Championship (MCC) events.',
    },
    {
      title: 'Technoblade',
      badge: 'PVP LEGEND',
      badgeStyle: 'color:#ce93d8;background:#1a0d2e;border:1px solid #6a1b9a',
      img: 'images/creator_technoblade.png',
      fallback: '&#128081;',
      fallbackBg: 'mob-bg-enderman',
      desc: 'Technoblade — whose motto was "Technoblade never dies" — was a beloved PvP master and storyteller. He won Minecraft\'s Monday and dominated Hypixel\'s Bedwars leaderboards. He passed away in 2022 and is forever cherished by the community.',
    },
    {
      title: 'MrBeast Gaming',
      badge: 'CHALLENGES',
      badgeStyle: 'color:#ffe082;background:#1a1500;border:1px solid #f9a825',
      img: 'images/creator_mrbeast.png',
      fallback: '&#128176;',
      fallbackBg: 'biome-bg-desert',
      desc: 'MrBeast\'s gaming channel hosts Minecraft challenges and competitions at scales no one else attempts — 100-player survival games, "Last to Leave" contests, and tournaments with enormous cash prizes that draw millions of viewers.',
    },
    {
      title: 'TommyInnit',
      badge: 'STREAMER',
      badgeStyle: 'color:#81d4fa;background:#0d1a33;border:1px solid #0277bd',
      img: 'images/creator_tommyinnit.png',
      fallback: '&#127897;',
      fallbackBg: 'mob-bg-skeleton',
      desc: 'Tommy became a Minecraft superstar through the Dream SMP — a heavily improvised, story-driven Minecraft server. His loud, chaotic energy and genuine emotional moments created some of the most-watched Minecraft content ever produced.',
    },
    {
      title: 'PewDiePie',
      badge: 'OG CREATOR',
      badgeStyle: 'color:#ef9a9a;background:#330d0d;border:1px solid #b71c1c',
      img: 'images/creator_pewdiepie.png',
      fallback: '&#129681;',
      fallbackBg: 'mob-bg-witch',
      desc: 'Felix "PewDiePie" Kjellberg reignited global Minecraft interest in 2019 with his Minecraft survival series, years after his original Let\'s Plays in 2010. His "Minecraft with Sven" arc became a beloved internet story watched by tens of millions.',
    },
    {
      title: 'Philza',
      badge: 'HARDCORE',
      badgeStyle: 'color:#80cbc4;background:#0d2233;border:1px solid #00695c',
      img: 'images/creator_philza.png',
      fallback: '&#128142;',
      fallbackBg: 'biome-bg-taiga',
      desc: 'Philza Minecraft is renowned for his Hardcore world — a run that lasted over five years of real time before a baby zombie and spiders ended it. The clip went viral instantly. He\'s also known as "Dad" on the Dream SMP and co-created the QSMP.',
    },
  ],
};

/* ============================================================
   TNT INTRO
   ============================================================ */
document.body.classList.add('tnt-active');
document.body.style.overflow = 'hidden';
document.getElementById('siteContent').style.overflow = 'hidden';
document.getElementById('siteContent').style.maxHeight = '100vh';

function detonateTNT() {
  const tntSound = new Audio('sounds/tnt_explosion.mp3');
  tntSound.volume = 0.8;
  tntSound.play();

  const tntBlock    = document.getElementById('tntBlock');
  const overlay     = document.getElementById('tntOverlay');
  const flash       = document.getElementById('flashOverlay');
  const burst       = document.getElementById('explosionBurst');
  const siteContent = document.getElementById('siteContent');

  tntBlock.style.animation  = 'none';
  tntBlock.style.transition = 'transform 0.06s';

  const EXPLODE_AT = 4300;
  const startTime  = Date.now();

  // Continuous shake + grow + red flash that intensifies over time
  const shakeInterval = setInterval(() => {
    const elapsed  = Date.now() - startTime;
    const progress = Math.min(elapsed / EXPLODE_AT, 1);

    const intensity = 6 + progress * 32;
    const scale     = 1 + progress * 0.35;
    const dx        = (Math.random() - .5) * intensity;
    const dy        = (Math.random() - .5) * intensity;

    tntBlock.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;

    // Flash the TNT red increasingly
    const redGlow = Math.floor(80 + progress * 180);
    const imgEl   = document.getElementById('tntImg');
    const svgEl   = document.getElementById('tntFallbackSvg');
    const glowVal = `drop-shadow(0 0 ${10 + progress * 40}px rgba(255,${Math.floor(80 - progress * 80)},0,${0.5 + progress * 0.5}))`;
    if (imgEl) imgEl.style.filter = glowVal;
    if (svgEl) svgEl.style.filter = glowVal;

    // Quick white screen flicker as it gets close
    if (progress > 0.75 && Math.random() > 0.82) {
      flash.style.transition = 'opacity 0.04s';
      flash.style.opacity    = (Math.random() * 0.4 * progress).toFixed(2);
      setTimeout(() => { flash.style.opacity = '0'; }, 60);
    }
  }, 40);

  // Trigger explosion at exact audio moment
  setTimeout(() => {
    clearInterval(shakeInterval);
    triggerExplosion();
  }, EXPLODE_AT);

  function triggerExplosion() {
    burst.style.display = 'block';
    burst.innerHTML     = '';

    const colors = ['#ff6600','#ffcc00','#ff3300','#ff9900','#ffffff','#ffff00','#ff4400'];

    for (let i = 0; i < 32; i++) {
      const p     = document.createElement('div');
      p.className = 'exp-particle';
      const angle = (i / 32) * Math.PI * 2;
      const dist  = 80 + Math.random() * 220;
      const dx    = Math.cos(angle) * dist;
      const dy    = Math.sin(angle) * dist;
      const size  = 8 + Math.random() * 20;
      p.style.cssText = `
        width:${size}px;height:${size}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        --dx:${dx}px;--dy:${dy}px;
        margin-left:-${size/2}px;margin-top:-${size/2}px;
        animation-duration:${.4 + Math.random() * .4}s;
        animation-delay:${Math.random() * .1}s;
      `;
      burst.appendChild(p);
    }

    flash.style.transition = 'opacity 0.05s';
    flash.style.opacity    = '1';
    setTimeout(() => {
      flash.style.transition = 'opacity 0.5s';
      flash.style.opacity    = '0';
    }, 80);

    setTimeout(() => {
      overlay.style.transition = 'opacity 0.6s ease';
      overlay.style.opacity    = '0';
      siteContent.classList.add('revealed');
    }, 200);

    setTimeout(() => {
      overlay.style.display        = 'none';
      burst.style.display          = 'none';
      document.body.style.overflow = '';
      document.body.classList.remove('tnt-active');
    }, 900);
  }
}

document.getElementById('siteContent').addEventListener('transitionend', function () {
  if (this.classList.contains('revealed')) {
    this.style.overflow  = '';
    this.style.maxHeight = '';
  }
});

/* ============================================================
   CAROUSEL SYSTEM
   ============================================================ */
const carouselState = {
  category: null,
  index: 0,
  items: [],
  autoTimer: null,
  progressTimer: null,
  SLIDE_DURATION: 5000,
};

const CATEGORY_LABELS = {
  mobs:     '&#129503; Mobs',
  biomes:   '&#127757; Biomes',
  seeds:    '&#127807; Seeds',
  creators: '&#128100; Creators',
};

const CATEGORY_ORDER = ['mobs', 'biomes', 'seeds', 'creators'];

function buildCarouselSlides(items) {
  const track = document.getElementById('carouselTrack');
  track.innerHTML = '';

  items.forEach(item => {
    const slide       = document.createElement('div');
    slide.className   = 'carousel-slide';
    slide.style.position = 'relative';

    const seedCopyHtml = item.seedNumber
      ? `<div class="carousel-seed-copy-row">
           <code class="carousel-seed-number">Seed: ${item.seedNumber}</code>
           <button class="seed-copy-btn" onclick="copySeed(this,'${item.seedNumber}')">&#9138; Copy</button>
         </div>`
      : '';

    slide.innerHTML = `
      <div class="carousel-img-side">
        <div class="carousel-img-container">
          <div class="carousel-img-glow"></div>
          <img class="carousel-img" src="${item.img}" alt="${item.title}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <div class="carousel-img-fallback">${item.fallback}</div>
        </div>
      </div>
      <div class="carousel-desc-side">
        <span class="carousel-badge" style="${item.badgeStyle}">${item.badge}</span>
        <h3 class="carousel-title">${item.title}</h3>
        <p class="carousel-desc">${item.desc.replace(/\n/g, '<br>')}</p>
        ${seedCopyHtml}
      </div>`;

    track.appendChild(slide);
  });
}

function triggerSlideAnimation(index) {
  const slides = document.getElementById('carouselTrack').querySelectorAll('.carousel-slide');
  slides.forEach((s, i) => {
    if (i !== index) return;
    const img      = s.querySelector('.carousel-img');
    const descSide = s.querySelector('.carousel-desc-side');
    img.classList.remove('img-enter');
    descSide.classList.remove('desc-enter');
    void img.offsetHeight; // force reflow
    img.classList.add('img-enter');
    descSide.classList.add('desc-enter');
  });
}

function buildDots(count) {
  const dots = document.getElementById('carouselDots');
  dots.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const d       = document.createElement('button');
    d.className   = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Slide ${i + 1}`);
    d.addEventListener('click', () => goToSlide(i));
    dots.appendChild(d);
  }
}

function buildTabs() {
  const tabs = document.getElementById('carouselTabs');
  tabs.innerHTML = '';
  CATEGORY_ORDER.forEach(cat => {
    if (!CAROUSEL_DATA[cat]) return;
    const t       = document.createElement('button');
    t.className   = 'carousel-tab' + (cat === carouselState.category ? ' active' : '');
    t.innerHTML   = CATEGORY_LABELS[cat];
    t.addEventListener('click', () => switchCategory(cat, 0));
    tabs.appendChild(t);
  });
}

function updateSlideUI(index, animate = true) {
  const track = document.getElementById('carouselTrack');
  track.style.transition = animate ? 'transform 0.5s cubic-bezier(.4,0,.2,1)' : 'none';
  track.style.transform  = `translateX(-${index * 100}%)`;
  setTimeout(() => triggerSlideAnimation(index), animate ? 300 : 20);
  document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  document.getElementById('carouselCounter').textContent = `${index + 1} / ${carouselState.items.length}`;
}

function goToSlide(index) {
  clearAutoplay();
  carouselState.index = (index + carouselState.items.length) % carouselState.items.length;
  updateSlideUI(carouselState.index);
  startAutoplay();
}

function startAutoplay() {
  clearAutoplay();
  const bar = document.getElementById('carouselProgressBar');
  bar.style.transition = 'none';
  bar.style.width      = '0%';
  void bar.offsetHeight;
  bar.style.transition = `width ${carouselState.SLIDE_DURATION}ms linear`;
  bar.style.width      = '100%';
  carouselState.autoTimer = setTimeout(() => {
    carouselState.index = (carouselState.index + 1) % carouselState.items.length;
    updateSlideUI(carouselState.index);
    startAutoplay();
  }, carouselState.SLIDE_DURATION);
}

function clearAutoplay() {
  clearTimeout(carouselState.autoTimer);
  const bar = document.getElementById('carouselProgressBar');
  bar.style.transition = 'none';
  bar.style.width      = '0%';
}

function switchCategory(cat, startIndex) {
  carouselState.category = cat;
  carouselState.items    = CAROUSEL_DATA[cat];
  carouselState.index    = Math.min(startIndex, carouselState.items.length - 1);
  buildCarouselSlides(carouselState.items);
  buildDots(carouselState.items.length);
  buildTabs();
  updateSlideUI(carouselState.index, false);
  startAutoplay();
}

function openCarousel(category, startIndex) {
  document.getElementById('carouselModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  switchCategory(category, startIndex);
}

function closeCarousel() {
  document.getElementById('carouselModal').classList.remove('active');
  clearAutoplay();
  document.body.style.overflow = '';
}

// Carousel controls
document.getElementById('carouselClose').addEventListener('click', closeCarousel);
document.getElementById('carouselModal').addEventListener('click', e => {
  if (e.target === document.getElementById('carouselModal')) closeCarousel();
});
document.getElementById('carouselPrev').addEventListener('click', () => goToSlide(carouselState.index - 1));
document.getElementById('carouselNext').addEventListener('click', () => goToSlide(carouselState.index + 1));

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!document.getElementById('carouselModal').classList.contains('active')) return;
  if (e.key === 'ArrowLeft')  goToSlide(carouselState.index - 1);
  if (e.key === 'ArrowRight') goToSlide(carouselState.index + 1);
  if (e.key === 'Escape')     closeCarousel();
});

// Touch / swipe
let touchStartX = 0;
document.getElementById('carouselModal').addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
document.getElementById('carouselModal').addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) goToSlide(carouselState.index + (dx < 0 ? 1 : -1));
});

/* ============================================================
   CONTACT MODAL FORM
   ============================================================ */
function sanitize(str) {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#039;');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitForm() {
  const name    = document.getElementById('contactName');
  const email   = document.getElementById('contactEmail');
  const type    = document.getElementById('contactType');
  const message = document.getElementById('contactMessage');
  let valid     = true;

  [name, email, type, message].forEach(f => f.classList.remove('is-invalid', 'is-valid'));

  if (!name.value.trim()) {
    name.classList.add('is-invalid'); valid = false;
  } else {
    name.classList.add('is-valid');
  }

  if (!email.value.trim() || !validateEmail(email.value.trim())) {
    email.classList.add('is-invalid'); valid = false;
  } else {
    email.classList.add('is-valid');
  }

  if (!type.value) {
    type.classList.add('is-invalid'); valid = false;
  } else {
    type.classList.add('is-valid');
  }

  const msgLen = message.value.trim().length;
  document.getElementById('msgFeedback').textContent =
    msgLen === 0 ? 'Message is required.' : 'Message must be at least 20 characters.';

  if (msgLen < 20) {
    message.classList.add('is-invalid'); valid = false;
  } else {
    message.classList.add('is-valid');
  }

  // If validation fails, stop here and show errors
  if (!valid) return;

  // All valid — submit the form to contact.php
  document.getElementById('contactForm').submit();
}
function resetForm() {
  const form = document.getElementById('contactForm');
  form.reset();
  form.querySelectorAll('.is-valid,.is-invalid').forEach(el => el.classList.remove('is-valid', 'is-invalid'));
  document.getElementById('charCount').textContent        = '0';
  form.style.display                                       = 'block';
  document.getElementById('formThankYou').style.display   = 'none';
}

document.getElementById('contactModal').addEventListener('hidden.bs.modal', () => resetForm());
document.getElementById('contactMessage').addEventListener('input', function () {
  document.getElementById('charCount').textContent = this.value.length;
});

/* ============================================================
   INLINE CONTACT FORM
   ============================================================ */
function submitInlineForm() {
  const name  = document.getElementById('iName');
  const email = document.getElementById('iEmail');
  const type  = document.getElementById('iType');
  const msg   = document.getElementById('iMsg');
  let valid   = true;

  [name, email, type, msg].forEach(f => f.classList.remove('is-invalid', 'is-valid'));

  if (!name.value.trim()) {
    name.classList.add('is-invalid'); valid = false;
  } else {
    name.classList.add('is-valid');
  }

  if (!email.value.trim() || !validateEmail(email.value.trim())) {
    email.classList.add('is-invalid'); valid = false;
  } else {
    email.classList.add('is-valid');
  }

  if (!type.value) {
    type.classList.add('is-invalid'); valid = false;
  } else {
    type.classList.add('is-valid');
  }

  const len = msg.value.trim().length;
  document.getElementById('iMsgFeedback').textContent =
    len === 0 ? 'Message is required.' : 'Message must be at least 20 characters.';

  if (len < 20) {
    msg.classList.add('is-invalid'); valid = false;
  } else {
    msg.classList.add('is-valid');
  }

  if (!valid) return;
  document.getElementById('inlineContactForm').submit();
}

function resetInlineForm() {
  const form = document.getElementById('inlineContactForm');
  form.reset();
  form.querySelectorAll('.is-valid,.is-invalid').forEach(el => el.classList.remove('is-valid', 'is-invalid'));
  document.getElementById('iCharCount').textContent               = '0';
  form.style.display                                               = 'block';
  document.getElementById('formThankYouInline').style.display     = 'none';
}

document.getElementById('iMsg').addEventListener('input', function () {
  document.getElementById('iCharCount').textContent = this.value.length;
});

/* ============================================================
   VIDEO FALLBACK
   ============================================================ */
document.querySelectorAll('.cvid-wrap video').forEach(vid => {
  vid.addEventListener('error', () => {
    vid.style.display = 'none';
    const fb = vid.nextElementSibling;
    if (fb && fb.classList.contains('cvid-fallback')) fb.classList.add('visible');
  });
});

/* ============================================================
   SEED COPY
   ============================================================ */
function copySeed(btn, seed) {
  navigator.clipboard.writeText(seed).then(() => {
    btn.textContent = '\u2713 Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = '&#9138; Copy'; btn.classList.remove('copied'); }, 1800);
  }).catch(() => {
    // Fallback for browsers without clipboard API
    const ta = document.createElement('textarea');
    ta.value           = seed;
    ta.style.cssText   = 'position:fixed;top:-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '\u2713 Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = '&#9138; Copy'; btn.classList.remove('copied'); }, 1800);
  });
}

/* ============================================================
   SCROLL — BACK TO TOP & ACTIVE NAV
   ============================================================ */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        link.classList.remove('active-section');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active-section');
        }
      });
    }
  });
}, { threshold: .4 });

sections.forEach(s => sectionObserver.observe(s));

/* ============================================================
   SCROLL — FADE-UP CARDS
   ============================================================ */
const fadeEls = document.querySelectorAll('.mc-card, .seed-card, .creator-card');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeUp 0.5s ease forwards ${i * .04}s`;
      entry.target.style.opacity   = '0';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: .1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  fadeObserver.observe(el);
});
/* ============================================================
   RAIN CARDS
   ============================================================ */
(function() {
  const RAIN_POOL = [];
  Object.keys(CAROUSEL_DATA).forEach(cat => {
    CAROUSEL_DATA[cat].forEach((item, idx) => {
      RAIN_POOL.push({ cat, idx, item });
    });
  });

  const CAT_COLORS = {
    mobs:     { stripe: '#2e7d32', badge: 'background:#2e7d3244;color:#a5d6a7;border:1px solid #2e7d32' },
    biomes:   { stripe: '#1b5e20', badge: 'background:#1b5e2044;color:#81c784;border:1px solid #1b5e20' },
    seeds:    { stripe: '#f9a825', badge: 'background:#f9a82522;color:#ffe082;border:1px solid #f9a825' },
    creators: { stripe: '#b8860b', badge: 'background:#b8860b22;color:#ffe082;border:1px solid #b8860b' },
  };

  let heroEl = null;
  let spawnTimer = null;
  let activeCards = 0;
  const MAX_ACTIVE = 5;

  function getHero() {
    if (!heroEl) heroEl = document.getElementById('hero');
    return heroEl;
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function spawnCard() {
    const hero = getHero();
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Only spawn if hero is visible
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    if (activeCards >= MAX_ACTIVE) return;

    const { cat, idx, item } = pickRandom(RAIN_POOL);
    const colors = CAT_COLORS[cat];

    const card = document.createElement('div');
    card.className = 'rain-card';

    // Random horizontal start (5%–85% of hero width)
    const leftPct = 5 + Math.random() * 80;
    const heroTop = hero.offsetTop;
    const heroH   = hero.offsetHeight;

    // Fall distance: full hero height + card height
    const fallDist = heroH + 200;
    const rotStart = (Math.random() - .5) * 18;
    const rotEnd   = rotStart + (Math.random() - .5) * 30;
    const drift    = (Math.random() - .5) * 60;
    const duration = 3800 + Math.random() * 1200;

    card.style.cssText = `
      left: ${leftPct}%;
      top: ${heroTop - 160}px;
      --rain-rot-start: ${rotStart}deg;
      --rain-rot-end: ${rotEnd}deg;
      --rain-fall-dist: ${fallDist}px;
      --rain-drift: ${drift}px;
      animation-duration: ${duration}ms;
      animation-delay: 0ms;
    `;

    const imgHtml = `
      <img class="rain-card-img" src="${item.img}" alt="${item.title}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="rain-card-img-fallback" style="display:none">${item.fallback}</div>`;

    card.innerHTML = `
      <div class="rain-card-cat-stripe" style="background:${colors.stripe}"></div>
      <div class="rain-card-img-wrap">${imgHtml}</div>
      <div class="rain-card-shine"></div>
      <div class="rain-card-body">
        <span class="rain-card-badge" style="${item.badgeStyle || colors.badge}">${item.badge}</span>
        <div class="rain-card-name">${item.title}</div>
        <p class="rain-card-desc">${item.desc.replace(/<[^>]+>/g, '').substring(0, 90)}...</p>
      </div>
      <div class="rain-card-hint">&#9658; CLICK TO OPEN &#9668;</div>`;

    card.addEventListener('click', () => {
      card.style.animation = 'none';
      card.style.opacity   = '0';
      card.style.transition = 'opacity .25s ease';
      setTimeout(() => card.remove(), 280);
      activeCards = Math.max(0, activeCards - 1);
      openCarousel(cat, idx);
    });

    // Remove after animation ends
    card.addEventListener('animationend', () => {
      card.remove();
      activeCards = Math.max(0, activeCards - 1);
    });
    card._rainData = { cat, idx };
    getHero().appendChild(card);
    activeCards++;
  }

  function scheduleNext() {
    const delay = 1200 + Math.random() * 1800;
    spawnTimer = setTimeout(() => {
      spawnCard();
      scheduleNext();
    }, delay);
  }

  // Start raining after TNT intro resolves
  function startRain() {
    scheduleNext();
  }

  // Hook into existing TNT detonation flow
  const _orig = window.detonateTNT;
  window.detonateTNT = function() {
    _orig && _orig();
    setTimeout(startRain, 1100);
  };

  // If site is already revealed (e.g. overlay was skipped), start immediately
  const siteContent = document.getElementById('siteContent');
  if (siteContent && siteContent.classList.contains('revealed')) {
    setTimeout(startRain, 800);
  }
})();
/* ============================================================
   MOB CARD SOUNDS
   ============================================================ */
(function () {
  let hoverSound = null;

  function playSound(src, volume = 0.55) {
    if (!src) return null;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch(() => {});
    return audio;
  }

  function stopSound(audio) {
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }

  function getMobSound(cat, idx) {
    if (cat !== 'mobs') return null;
    const mob = CAROUSEL_DATA.mobs[idx];
    if (!mob) return null;
    const filename = mob.img.replace('images/', '').replace('.png', '');
    return `sounds/${filename}.mp3`;
  }

  /* ── SUMMARY CARDS hover + click ── */
  document.querySelectorAll('.mc-card').forEach(card => {
    const onclick = card.getAttribute('onclick') || '';
    const match   = onclick.match(/openCarousel\('(\w+)',(\d+)\)/);
    if (!match) return;

    const cat = match[1];
    const idx = parseInt(match[2]);
    const src = getMobSound(cat, idx);
    if (!src) return;

    card.addEventListener('mouseenter', () => {
      stopSound(hoverSound);
      hoverSound = playSound(src, 0.45);
    });

    card.addEventListener('mouseleave', () => {
      stopSound(hoverSound);
      hoverSound = null;
    });

    card.addEventListener('click', () => {
      stopSound(hoverSound);
      hoverSound = null;
      playSound(src, 0.65);
    });
  });

  /* ── RAIN CARDS ── */
  const rainObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (!node.classList || !node.classList.contains('rain-card')) return;

        const onclick = node.getAttribute('onclick') || '';
        const dataset = node._rainData;
        if (!dataset) return;

        const src = getMobSound(dataset.cat, dataset.idx);
        if (!src) return;

        node.addEventListener('mouseenter', () => {
          stopSound(hoverSound);
          hoverSound = playSound(src, 0.4);
        });

        node.addEventListener('mouseleave', () => {
          stopSound(hoverSound);
          hoverSound = null;
        });
      });
    });
  });

  rainObserver.observe(document.getElementById('hero'), { childList: true });

  /* ── CAROUSEL ── */
/* ── CAROUSEL ── */
  let carouselSound = null;

  function playCarouselSound(src) {
    stopSound(carouselSound);
    carouselSound = null;
    if (!src) return;
    carouselSound = playSound(src, 0.5);
  }

  const _origSwitch = window.switchCategory;
  window.switchCategory = function (cat, startIndex) {
    stopSound(carouselSound);
    carouselSound = null;
    _origSwitch(cat, startIndex);
    if (cat === 'mobs') {
      const src = getMobSound(cat, carouselState.index);
      playCarouselSound(src);
    }
  };

  const _origGoTo = window.goToSlide;
  window.goToSlide = function (index) {
    stopSound(carouselSound);
    carouselSound = null;
    _origGoTo(index);
    const len  = CAROUSEL_DATA[carouselState.category]?.length || 1;
    const norm = ((index % len) + len) % len;
    const src  = getMobSound(carouselState.category, norm);
    playCarouselSound(src);
  };

  const _origClose = window.closeCarousel;
  window.closeCarousel = function () {
    stopSound(carouselSound);
    carouselSound = null;
    _origClose();
  };

})();