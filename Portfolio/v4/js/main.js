/**
 * V4 · Editorial Noir — Main JavaScript
 * Basiert auf V3 (Nav, Galerie, Lightbox, Reveal, Fullscreen).
 */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initGallery();
  initLightbox();
  initScrollReveal();
  initFooterYear();
  initFullscreenToggle();
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
let resizeTimer = null;

function initGallery() {
  const grid = document.getElementById("photoGrid");
  const filterBar = document.getElementById("filterBar");

  if (!grid || typeof PHOTOS === "undefined") return;

  galleryGrid = grid;
  currentPhotos = PHOTOS;
  renderGallery(grid, currentPhotos);

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    currentFilter = btn.dataset.filter;
    applyFilter(grid, currentFilter);
  });

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
