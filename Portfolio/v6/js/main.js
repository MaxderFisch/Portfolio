/**
 * V6 · Editorial Noir Motion — Main JavaScript
 * Basiert auf V5 (Nav, Lightbox, Reveal, Fullscreen), zusätzlich:
 * - initGallery(): entscheidet einmalig zwischen der horizontalen
 *   Scroll-Jack-Galerie (initGalleryScroll) und dem statischen Fallback-
 *   Raster aus V5 (initGalleryClassic) — Fallback greift bei
 *   "prefers-reduced-motion" und auf schmalen Bildschirmen (<768px).
 * - initHeroParallax(): dezenter Parallax-Effekt auf dem Hero-Video.
 */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initGallery();
  initLightbox();
  initScrollReveal();
  initFooterYear();
  initFullscreenToggle();
  initHeroParallax();
});

function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");

  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  burger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    burger.classList.toggle("is-active", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      burger.classList.remove("is-active");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

let currentPhotos = [];
let currentFilter = "all";
let galleryGrid = null;
let galleryMode = "scroll"; // "scroll" (Scroll-Jack) oder "classic" (statisches Fallback-Raster)
let resizeTimer = null;

// --- Scroll-Jack-Galerie: Zustand ---
let galleryScrollDistance = 0;
let galleryTicking = false;

/**
 * Entscheidet EINMALIG beim Laden, ob die horizontale Scroll-Jack-Galerie
 * oder das statische Fallback-Raster (V5-Verhalten) verwendet wird.
 * Fallback greift bei "prefers-reduced-motion" oder auf schmalen Bildschirmen,
 * damit die Scroll-Jack-Mechanik dort nicht erzwungen wird.
 */
function initGallery() {
  const grid = document.getElementById("photoGrid");
  const filterBar = document.getElementById("filterBar");

  if (!grid || typeof PHOTOS === "undefined") return;

  galleryGrid = grid;
  currentPhotos = PHOTOS;

  const useClassic = prefersReducedMotion || window.innerWidth < 768;
  galleryMode = useClassic ? "classic" : "scroll";

  if (galleryMode === "classic") {
    initGalleryClassic(grid);
  } else {
    initGalleryScroll(grid);
  }

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    currentFilter = btn.dataset.filter;

    if (galleryMode === "classic") {
      applyFilter(grid, currentFilter);
    } else {
      applyFilterScroll();
    }
  });
}

/**
 * Statisches Fallback-Raster — identisch zum V5-Verhalten (justiertes Grid).
 */
function initGalleryClassic(grid) {
  grid.classList.add("is-active");
  renderGallery(grid, currentPhotos);

  window.addEventListener(
    "resize",
    () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => layoutJustifiedGallery(grid), 150);
    },
    { passive: true }
  );

  window.addEventListener("load", () => layoutJustifiedGallery(grid));
}

/**
 * Horizontale Scroll-Jack-Galerie: normales vertikales Scrollen läuft weiter,
 * bis der gepinnte Bereich (#galleryPin) erreicht ist. Danach wird weiteres
 * Scrollen in horizontale Bewegung des Tracks (#galleryTrack) übersetzt,
 * bis die Galerie durchlaufen ist — dann läuft die Seite normal weiter.
 */
function initGalleryScroll(grid) {
  const spacer = document.getElementById("gallerySpacer");
  const pin = document.getElementById("galleryPin");
  const track = document.getElementById("galleryTrack");

  if (!spacer || !pin || !track) {
    // Markup fehlt aus irgendeinem Grund — sauberer Rückfall auf Klassik-Modus.
    galleryMode = "classic";
    initGalleryClassic(grid);
    return;
  }

  spacer.classList.add("is-active");

  renderGalleryRows();
  updateGalleryScrollMetrics();
  onGalleryScroll();

  window.addEventListener("scroll", onGalleryScroll, { passive: true });

  window.addEventListener(
    "resize",
    () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        renderGalleryRows();
        updateGalleryScrollMetrics();
        onGalleryScroll();
      }, 150);
    },
    { passive: true }
  );

  window.addEventListener("load", () => {
    updateGalleryScrollMetrics();
    onGalleryScroll();
  });
}

/**
 * Rendert die aktuell sichtbaren (gefilterten) Fotos abwechselnd in zwei
 * Zeilen (#galleryRow1 / #galleryRow2). data-index referenziert stets den
 * Index im vollständigen currentPhotos-Array, damit Lightbox-Funktionen
 * (openLightbox, getVisiblePhotos, stepLightbox) unverändert weiterlaufen.
 */
function renderGalleryRows() {
  const row1 = document.getElementById("galleryRow1");
  const row2 = document.getElementById("galleryRow2");
  if (!row1 || !row2) return;

  const visible = getVisiblePhotos();

  // Zielgröße: etwas größer als V5/ursprünglich (220/260px), aber minimal
  // kleiner als der vorherige Zwischenstand (330/390px), um die schwarze
  // Leerfläche über/unter der Galerie zu füllen ohne komplett bis an den
  // Rand zu gehen. Nach oben hin an der Viewport-Höhe gedeckelt (86% von
  // 100vh, minus Zeilenabstand), damit auf niedrigeren Fenstern/Bildschirmen
  // nichts oben/unten abgeschnitten wird — der Pin ist genau 100vh hoch und
  // zentriert die zwei Zeilen vertikal.
  const trackGap = 14; // muss zu .gallery-scroll__track { gap: 14px; } passen
  const targetRowHeight = window.innerWidth < 1024 ? 305 : 360;
  const maxRowHeight = (window.innerHeight * 0.86 - trackGap) / 2;
  const rowHeight = Math.max(160, Math.min(targetRowHeight, maxRowHeight));

  const rowsMarkup = [[], []];

  visible.forEach((photo, i) => {
    const fullIndex = currentPhotos.indexOf(photo);
    const ratio = parseFloat(photo.ratio) || 1.5;
    const width = Math.round(rowHeight * ratio);
    const target = i % 2;

    rowsMarkup[target].push(`
      <figure class="photo-item reveal" data-category="${photo.category}" data-index="${fullIndex}" style="width:${width}px; height:${rowHeight}px;">
        <picture>
          <source srcset="../assets/img/photo/thumb/${photo.slug}.webp" type="image/webp">
          <img src="../assets/img/photo/thumb/${photo.slug}.jpg" alt="${photo.alt}" loading="lazy">
        </picture>
        <figcaption class="photo-item__caption">${photo.title}</figcaption>
      </figure>`);
  });

  row1.innerHTML = rowsMarkup[0].join("");
  row2.innerHTML = rowsMarkup[1].join("");

  [row1, row2].forEach((row) => {
    row.querySelectorAll(".photo-item").forEach((item) => {
      item.addEventListener("click", () => openLightbox(Number(item.dataset.index)));
    });
    observeRevealElements(row.querySelectorAll(".reveal"));
  });
}

/**
 * Berechnet die verfügbare horizontale Scrollstrecke (Trackbreite minus
 * Viewportbreite) und setzt die Höhe des Spacers entsprechend, damit
 * genug vertikaler Scrollraum für die horizontale Bewegung existiert.
 * Ist der Track schmaler als der Viewport (z.B. wenige gefilterte Fotos),
 * wird der Pin auf "statisch" umgeschaltet (kein Scroll-Jacking nötig).
 */
function updateGalleryScrollMetrics() {
  const spacer = document.getElementById("gallerySpacer");
  const pin = document.getElementById("galleryPin");
  const track = document.getElementById("galleryTrack");
  if (!spacer || !pin || !track) return;

  // .gallery-scroll__pin hat links/rechts 1.5vw Padding (kleiner schwarzer
  // Rand zum Bildschirmrand) — das sichtbare "Fenster", durch das der Track
  // läuft, ist deshalb etwas schmaler als das volle Viewport.
  const edgeInsetRatio = 0.015; // muss zu .gallery-scroll__pin { padding: 0 1.5vw; } passen (pro Seite)
  const viewportWidth = window.innerWidth * (1 - edgeInsetRatio * 2);
  const viewportHeight = window.innerHeight;
  const trackWidth = track.scrollWidth;

  galleryScrollDistance = Math.max(0, trackWidth - viewportWidth);

  if (galleryScrollDistance <= 0) {
    pin.classList.add("is-static");
    spacer.style.height = "auto";
    track.style.transform = "none";
  } else {
    pin.classList.remove("is-static");
    spacer.style.height = `${viewportHeight + galleryScrollDistance}px`;
  }
}

/**
 * rAF-gedrosselter Scroll-Handler: übersetzt den Fortschritt innerhalb des
 * Spacer-Bereichs in eine horizontale translateX-Bewegung des Tracks.
 */
function onGalleryScroll() {
  if (galleryTicking) return;
  galleryTicking = true;

  requestAnimationFrame(() => {
    galleryTicking = false;

    if (galleryMode !== "scroll" || galleryScrollDistance <= 0) return;

    const spacer = document.getElementById("gallerySpacer");
    const track = document.getElementById("galleryTrack");
    if (!spacer || !track) return;

    const spacerHeight = spacer.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableHeight = spacerHeight - viewportHeight;
    if (scrollableHeight <= 0) return;

    const rect = spacer.getBoundingClientRect();
    const progress = clamp(-rect.top / scrollableHeight, 0, 1);

    track.style.transform = `translateX(-${progress * galleryScrollDistance}px)`;
  });
}

function applyFilterScroll() {
  renderGalleryRows();
  updateGalleryScrollMetrics();
  onGalleryScroll();
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function renderGallery(grid, photos) {
  grid.innerHTML = photos
    .map(
      (photo, index) => `
      <figure class="photo-item reveal" data-category="${photo.category}" data-ratio="${photo.ratio}" data-index="${index}">
        <picture>
          <source srcset="../assets/img/photo/thumb/${photo.slug}.webp" type="image/webp">
          <img src="../assets/img/photo/thumb/${photo.slug}.jpg" alt="${photo.alt}" loading="lazy">
        </picture>
        <figcaption class="photo-item__caption">${photo.title}</figcaption>
      </figure>`
    )
    .join("");

  observeRevealElements(grid.querySelectorAll(".reveal"));

  grid.querySelectorAll(".photo-item").forEach((item) => {
    item.addEventListener("click", () => openLightbox(Number(item.dataset.index)));
  });

  layoutJustifiedGallery(grid);
}

function layoutJustifiedGallery(grid) {
  if (!grid) return;

  const items = Array.from(grid.querySelectorAll(".photo-item")).filter(
    (item) => !item.classList.contains("is-hidden")
  );
  if (!items.length) return;

  const containerWidth = grid.clientWidth;
  if (!containerWidth) return;

  const gap = 12;
  const targetHeight = window.innerWidth < 640 ? 190 : window.innerWidth < 960 ? 220 : 260;

  let row = [];
  let rowNaturalWidth = 0;
  const rows = [];

  items.forEach((item) => {
    const ratio = parseFloat(item.dataset.ratio) || 1.5;
    const naturalWidth = targetHeight * ratio;

    row.push({ item, naturalWidth });
    rowNaturalWidth += naturalWidth;

    const gapsWidth = (row.length - 1) * gap;
    if (rowNaturalWidth + gapsWidth >= containerWidth - 1) {
      rows.push({ row, rowNaturalWidth, gapsWidth });
      row = [];
      rowNaturalWidth = 0;
    }
  });

  if (row.length) {
    rows.push({ row, rowNaturalWidth, gapsWidth: (row.length - 1) * gap, isLast: true });
  }

  rows.forEach(({ row, rowNaturalWidth, gapsWidth, isLast }) => {
    const availableWidth = containerWidth - gapsWidth;
    let scale = availableWidth / rowNaturalWidth;
    if (isLast) scale = Math.min(scale, 1);
    const rowHeight = targetHeight * scale;

    row.forEach(({ item, naturalWidth }) => {
      item.style.width = `${Math.round(naturalWidth * scale)}px`;
      item.style.height = `${Math.round(rowHeight)}px`;
    });
  });
}

function applyFilter(grid, filter) {
  grid.querySelectorAll(".photo-item").forEach((item) => {
    const matches = filter === "all" || item.dataset.category === filter;
    item.classList.toggle("is-hidden", !matches);
  });
  layoutJustifiedGallery(grid);
}

let lightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (!lightbox) return;

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => stepLightbox(-1));
  nextBtn.addEventListener("click", () => stepLightbox(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

function getVisiblePhotos() {
  if (currentFilter === "all") return currentPhotos;
  return currentPhotos.filter((p) => p.category === currentFilter);
}

function openLightbox(fullIndex) {
  const photo = currentPhotos[fullIndex];
  if (!photo) return;

  const visible = getVisiblePhotos();
  lightboxIndex = visible.findIndex((p) => p.slug === photo.slug);

  showLightboxPhoto();

  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function stepLightbox(dir) {
  const visible = getVisiblePhotos();
  lightboxIndex = (lightboxIndex + dir + visible.length) % visible.length;
  showLightboxPhoto();
}

function showLightboxPhoto() {
  const visible = getVisiblePhotos();
  const photo = visible[lightboxIndex];
  if (!photo) return;

  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");

  img.src = `../assets/img/photo/full/${photo.slug}.jpg`;
  img.alt = photo.alt;
  caption.textContent = photo.title;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

let revealObserver;

function initScrollReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  observeRevealElements(document.querySelectorAll(".reveal"));
}

function observeRevealElements(elements) {
  if (!revealObserver) return;
  elements.forEach((el) => revealObserver.observe(el));
}

function initFooterYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function initFullscreenToggle() {
  const btn = document.getElementById("fullscreenBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.();
    }
  });

  document.addEventListener("fullscreenchange", () => {
    const isFullscreen = !!document.fullscreenElement;
    btn.classList.toggle("is-active", isFullscreen);
    btn.setAttribute("aria-label", isFullscreen ? "Vollbildmodus verlassen" : "Vollbildmodus starten");
    btn.setAttribute("title", isFullscreen ? "Vollbildmodus verlassen" : "Vollbildmodus starten");
  });
}

/**
 * Dezenter Parallax-Effekt auf dem Hero-Video: bewegt sich beim Scrollen
 * langsamer als die Seite (translateY), solange der Hero-Bereich sichtbar
 * ist. .hero__media hat dafür bereits einen Puffer (top:-10%, height:120%),
 * damit dabei keine leeren Ränder sichtbar werden. Wird bei
 * "prefers-reduced-motion" komplett übersprungen.
 */
function initHeroParallax() {
  const media = document.querySelector(".hero__media");
  const hero = document.querySelector(".hero");
  if (!media || !hero || prefersReducedMotion) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    if (scrollY > heroHeight) return;

    const offset = scrollY * 0.15;
    media.style.transform = `translateY(${offset}px)`;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );
}
