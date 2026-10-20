(function () {
  if (window.__mxSW) return; window.__mxSW = 1;
  var d = document;
  var mk = function (t, css) { var e = d.createElement(t); if (css) e.style.cssText = css; return e; };
  var SVG = 'http://www.w3.org/2000/svg';
  var sv = function (t, at) { var e = d.createElementNS(SVG, t); for (var k in at) e.setAttribute(k, at[k]); return e; };
  var FONT = 'https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=general-sans@400,500,600&display=swap';
  var WORD = 'Max Aulinger';
  var EIO = 'cubic-bezier(.77,0,.18,1)', HOP = 'cubic-bezier(.56,0,.35,.98)', EXPO = 'cubic-bezier(.87,0,.13,1)';
  var S_IN = 'cubic-bezier(.12,0,.39,0)', S_OUT = 'cubic-bezier(.61,1,.88,1)', S_IO = 'cubic-bezier(.37,0,.63,1)';
  var DRIFT = 0.012;
  var lay = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none';
  var reduce = function () { return matchMedia('(prefers-reduced-motion:reduce)').matches; };
  var wa = function (el, kf, o) { var a = el.animate(kf, Object.assign({ fill: 'both' }, o)); return a.finished.catch(function () {}); };
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

  var arriving = null;
  try { arriving = JSON.parse(sessionStorage.getItem('mx-go') || 'null'); if (arriving && Date.now() - arriving.t > 6000) arriving = null; } catch (x) {}
  if (arriving && d.readyState === 'loading' && !reduce()) {
    try { d.write('<link rel="preconnect" href="https://api.fontshare.com" crossorigin><link rel="preconnect" href="https://cdn.fontshare.com" crossorigin><link rel="stylesheet" href="' + FONT.replace(/&/g, '&amp;') + '">'); } catch (x) {}
  }

  function build(open) {
    var old = d.getElementById('mx-cover'); if (old) old.remove();
    var c = mk('div', 'position:fixed;inset:0;z-index:2147483000;background:#000;overflow:hidden;pointer-events:auto;cursor:default;contain:strict');
    c.id = 'mx-cover'; c._rows = []; c._ys = [];
    for (var i = 0; i < 3; i++) {
      var b = mk('div', 'position:absolute;left:0;right:0;top:' + (i * 33.333) + '%;height:33.334%;overflow:hidden');
      if (i === 1) { var wb = mk('div', 'position:absolute;inset:0;background:#fff;transform-origin:50% 50%;will-change:transform;transform:scaleY(' + (open ? 1 : 0) + ')'); b.appendChild(wb); c._mid = wb; }
      var y = mk('div', 'position:absolute;left:0;right:0;top:50%;height:0;will-change:transform' + (open ? '' : ';transform:translateY(100vh)'));
      var r = mk('div', "position:absolute;left:50%;top:0;display:flex;white-space:nowrap;font-family:'Clash Display',system-ui,sans-serif;font-weight:700;font-size:clamp(40px,10vw,170px);line-height:1;letter-spacing:-.015em;text-transform:uppercase;will-change:transform;color:" + (i === 1 ? '#000' : '#fff') + ';transform:translate(-50%,-50%)');
      for (var k = 0; k < 6; k++) { var s = mk('span', 'margin:0 .22em'); s.textContent = WORD; r.appendChild(s); }
      y.appendChild(r); b.appendChild(y); c.appendChild(b);
      c._rows.push(r); c._ys.push(y);
    }
    (d.body || d.documentElement).appendChild(c);
    return c;
  }
  var TX = function (x) { return 'translate(calc(-50% + ' + x.toFixed(1) + 'px),-50%)'; };
  var off = function (c, r) { return c.clientHeight / 6 + r.offsetHeight / 2 + 8; };
  var dir = function (i) { return i === 1 ? 1 : -1; };
  function intro(c) {
    var W = c.clientWidth;
    c._rows.forEach(function (r, i) {
      wa(c._ys[i], [{ transform: 'translateY(' + off(c, r) + 'px)' }, { transform: 'translateY(0px)' }], { duration: 1150, delay: i * 50, easing: EIO });
      wa(r, [{ transform: TX(-dir(i) * W * 0.55) }, { transform: TX(0) }], { duration: 1450, easing: 'cubic-bezier(.65,0,.35,1)' });
    });
    wa(c._mid, [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }], { duration: 1050, delay: 120, easing: EIO });
    return wait(1460);
  }
  function drift(c, sec) {
    var W = c.clientWidth, a = DRIFT * W * sec, b = a + DRIFT * W * 20;
    c._rows.forEach(function (r, i) {
      r.getAnimations().forEach(function (x) { x.cancel(); });
      r.animate([{ transform: TX(dir(i) * a) }, { transform: TX(dir(i) * b) }], { duration: 20000, easing: 'linear', fill: 'forwards' });
    });
  }
  function outro(c) {
    c._rows.forEach(function (r, i) { wa(c._ys[i], [{ transform: 'translateY(0px)' }, { transform: 'translateY(' + (-off(c, r)) + 'px)' }], { duration: 650, delay: i * 50, easing: EIO }); });
    wa(c._mid, [{ transform: 'scaleY(1)' }, { transform: 'scaleY(0)' }], { duration: 600, delay: 160, easing: EIO });
    return wait(780);
  }

  var FX = {
    kurve: function (c, full) {
      var el = mk('div', lay + ';overflow:hidden');
      var blk = mk('div', 'position:absolute;left:0;right:0;top:0;height:100%;background:#000;will-change:transform;transform:translateY(' + (full ? '0%' : '100%') + ')');
      var cap = mk('div', 'position:absolute;left:-15%;width:130%;height:45vh;background:#000;will-change:transform;transform:scaleY(0);' + (full ? 'top:100%;transform-origin:50% 0;border-radius:0 0 50% 50% / 0 0 100% 100%' : 'bottom:100%;transform-origin:50% 100%;border-radius:50% 50% 0 0 / 100% 100% 0 0'));
      blk.appendChild(cap); el.appendChild(blk);
      var capKf = [{ transform: 'scaleY(0)', easing: S_IN }, { transform: 'scaleY(1)', offset: 0.5, easing: S_OUT }, { transform: 'scaleY(0)' }];
      return {
        el: el,
        inn: function () { wa(cap, capKf, { duration: 1000 }); return wa(blk, [{ transform: 'translateY(100%)', easing: S_IN }, { transform: 'translateY(50%)', offset: 0.5, easing: S_OUT }, { transform: 'translateY(0%)' }], { duration: 1000 }); },
        out: function () { wa(cap, capKf, { duration: 1000 }); return wa(blk, [{ transform: 'translateY(0%)', easing: S_IN }, { transform: 'translateY(-50%)', offset: 0.5, easing: S_OUT }, { transform: 'translateY(-100%)' }], { duration: 1000 }); }
      };
    },
    balken: function (c, full) {
      var f = 0.12, el = mk('div', lay + ';background:#000;will-change:transform;transform:' + (full ? 'none' : 'scale(0,' + f + ')'));
      return {
        el: el,
        inn: function () { el.style.transformOrigin = '0 50%'; return wa(el, [{ transform: 'scale(0,' + f + ')', easing: EXPO }, { transform: 'scale(1,' + f + ')', offset: 0.5, easing: EXPO }, { transform: 'scale(1,1)' }], { duration: 1400 }); },
        out: function () { el.style.transformOrigin = '100% 50%'; return wa(el, [{ transform: 'scale(1,1)', easing: EXPO }, { transform: 'scale(1,' + f + ')', offset: 0.5, easing: EXPO }, { transform: 'scale(0,' + f + ')' }], { duration: 1300 }); }
      };
    },
    spirale: function (c, full) {
      var s = sv('svg', { viewBox: '-360 -360 760 760', preserveAspectRatio: 'xMidYMid slice' }); s.style.cssText = lay;
      var p = sv('path', { fill: 'none', stroke: '#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'm0 0c3.36 0.06 6.6-2.82 7.07-7.07 0.59-4.19-1.79-9.6-7.07-12.93-5.18-3.4-13.27-4.43-21.21-1.21-7.92 3.09-15.48 10.7-18.79 21.21-3.42 10.46-2.3 23.68 4.64 35.36 6.83 11.64 19.57 21.35 35.36 24.64 15.69 3.43 34.14 0.2 49.5-10.5 15.38-10.52 27.21-28.47 30.5-49.5 3.43-20.92-1.92-44.6-16.36-63.64-14.2-19.1-37.37-33.1-63.64-36.36-26.16-3.45-55.05 4.06-77.78 22.22-22.82 17.9-38.98 46.25-42.22 77.78-3.48 31.43 6.2 65.49 28.08 91.92 21.58 26.55 55.16 44.87 91.92 48.08 36.66 3.5 75.94-8.33 106.07-33.93 30.27-25.28 50.74-64.07 53.93-106.07 3.53-41.9-10.46-86.4-39.79-120.21-28.97-33.99-72.97-56.62-120.21-59.79-47.13-3.56-96.85 12.6-134.35 45.65-37.71 32.65-62.51 81.88-65.65 134.35-3.55 52.4 14.72 107.29 51.51 148.49 36.35 41.41 90.75 68.41 148.49 71.51 57.63 3.58 117.75-16.86 162.63-57.37 45.14-40.03 74.29-99.66 77.37-162.63 3.62-62.86-19.02-128.21-63.22-176.78-43.73-48.85-108.57-80.17-176.78-83.22-68.13-3.64-138.65 21.15-190.92 69.08-52.57 47.43-86.06 117.45-89.08 190.92-3.66 73.36 23.29 149.1 74.94 205.06 51.12 56.3 126.35 91.94 205.06 94.94 78.6 3.69 159.56-25.42 219.2-80.8 60.03-54.8 97.82-135.26 100.8-219.2 3.72-83.84-27.56-170.01-86.65-233.35-58.51-63.77-144.14-103.69-233.35-106.65-89.07-3.71-180.46 29.68-247.49 92.51-67.51 62.18-109.54 153.08-112.51 247.49-3.74 94.33 31.82 190.91 98.37 261.63 65.88 71.23 161.96 115.43 261.63 118.37 99.57 3.76 201.36-33.95 275.77-104.23 74.96-69.57 121.31-170.86 124.23-275.77' });
      s.appendChild(p);
      var sc = Math.max(innerWidth, innerHeight) / 760, Wd = function (px) { return (px / sc).toFixed(2) + 'px'; }, L = 4000;
      var init = function () { try { L = p.getTotalLength() || 4000; } catch (e) {} p.style.strokeDasharray = L + ' ' + L; };
      return {
        el: s,
        inn: function () {
          init();
          wa(p, [{ opacity: 0 }, { opacity: 1 }], { duration: 450, easing: S_IO });
          wa(p, [{ strokeWidth: Wd(140) }, { strokeWidth: Wd(420) }], { duration: 1100, delay: 150, easing: S_IO });
          return wa(p, [{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: 1250, easing: S_IO });
        },
        out: function () {
          init();
          wa(p, [{ strokeWidth: Wd(420) }, { strokeWidth: Wd(140) }], { duration: 900, easing: S_IO });
          return wa(p, [{ strokeDashoffset: 0 }, { strokeDashoffset: -L }], { duration: 900, delay: 300, easing: S_IO });
        }
      };
    },
    fenster: function (c, full) {
      var el = mk('div', lay + ';background:#000;will-change:transform;transform-origin:50% 75%;transform:' + (full ? 'none' : 'scale(.7,.002)'));
      return {
        el: el,
        inn: function () { return wa(el, [{ transform: 'scale(.7,.002)' }, { transform: 'scale(1,1)' }], { duration: 1100, easing: HOP }); },
        out: function () { el.style.transformOrigin = '50% 0%'; return wa(el, [{ transform: 'scale(1,1)' }, { transform: 'scale(1,0)' }], { duration: 1100, easing: HOP }); }
      };
    },
    aufloesen: function (c, full) {
      var W = innerWidth, H = innerHeight, cw = 96, ch = Math.max(24, Math.round(cw * H / W));
      var cv = mk('canvas', lay); cv.width = cw; cv.height = ch;
      var g = cv.getContext('2d'), img = g.createImageData(cw, ch), N = new Float32Array(cw * ch);
      var fr = function (x) { return x - Math.floor(x); };
      var rnd = function (x, y) { return fr(Math.sin(x * 12.9898 + y * 4.1414) * 43758.5453); };
      for (var y = 0; y < ch; y++) for (var x = 0; x < cw; x++) {
        var px = x / cw * 5, py = y / ch * 5, ix = Math.floor(px), iy = Math.floor(py), ux = px - ix, uy = py - iy;
        ux = ux * ux * (3 - 2 * ux); uy = uy * uy * (3 - 2 * uy);
        var a = rnd(ix, iy), b = rnd(ix + 1, iy), cc = rnd(ix, iy + 1), dd = rnd(ix + 1, iy + 1);
        var r = (a + (b - a) * ux) + ((cc + (dd - cc) * ux) - (a + (b - a) * ux)) * uy;
        N[y * cw + x] = r * r;
      }
      var e = 0.185;
      var draw = function (p) {
        var lo = 1 - p - e, hi = 1 - p + e, D = img.data;
        for (var i = 0; i < N.length; i++) { var t = Math.min(1, Math.max(0, (N[i] - lo) / (hi - lo))); D[i * 4 + 3] = (1 - t * t * (3 - 2 * t)) * 255; }
        g.putImageData(img, 0, 0);
      };
      var run = function (from, to) {
        return new Promise(function (res) {
          var t0 = performance.now();
          var step = function (now) { var k = Math.min(1, (now - t0) / 1000); draw(from + (to - from) * k * k); if (k < 1) requestAnimationFrame(step); else res(); };
          requestAnimationFrame(step);
        });
      };
      draw(full ? -0.75 : 1.5);
      return { el: cv, inn: function () { return run(1.5, -0.75); }, out: function () { return run(-0.75, 1.5); } };
    }
  };
  var ORDER = ['kurve', 'balken', 'spirale', 'fenster', 'aufloesen'];
  function pick() {
    var n = 0; try { n = (+sessionStorage.getItem('mx-fx-n') || 0); sessionStorage.setItem('mx-fx-n', String(n + 1)); } catch (x) { n = Math.floor(Math.random() * ORDER.length); }
    return ORDER[n % ORDER.length];
  }
  function veil(c, fx, full) { var V = (FX[fx] || FX.fenster)(c, full); c.insertBefore(V.el, c.firstChild); return V; }

  var target = function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null; if (!a) return null;
    var raw = a.getAttribute('href') || '';
    if (!raw || raw.charAt(0) === '#' || /^(mailto|tel|javascript):/i.test(raw) || a.target === '_blank' || a.hasAttribute('download')) return null;
    var u; try { u = new URL(raw, location.href); } catch (x) { return null; }
    if (u.origin !== location.origin || !/\.html$/i.test(u.pathname)) return null;
    return { a: a, u: u };
  };
  var pre = {};
  addEventListener('pointerover', function (e) {
    var t = target(e); if (!t) return; var h = t.u.href.split('#')[0]; if (pre[h]) return; pre[h] = 1;
    try { var l = mk('link'); l.rel = 'prefetch'; l.href = h; d.head.appendChild(l); } catch (x) {}
  }, { passive: true });

  var busy = false;
  addEventListener('click', function (e) {
    if (e.defaultPrevented || busy || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var t = target(e); if (!t) return;
    if (t.u.pathname === location.pathname) {
      if (!t.u.hash) return;
      var el = d.getElementById(decodeURIComponent(t.u.hash.slice(1))); if (!el) return;
      e.preventDefault(); scrollTo({ top: el.getBoundingClientRect().top + scrollY, behavior: 'smooth' }); return;
    }
    e.preventDefault(); leave(t.u.href);
  });

  function leave(href) {
    busy = true;
    var v = { fx: pick() }, gone = false;
    var go = function () { if (gone) return; gone = true; v.t = Date.now(); v.d = v.d || v.t; try { sessionStorage.setItem('mx-go', JSON.stringify(v)); } catch (x) {} location.href = href; };
    if (reduce()) { go(); return; }
    var c = build(false);
    c.style.background = 'transparent';
    var V = veil(c, v.fx, false);
    V.inn().then(function () {
      c.style.background = '#000'; if (V.el.parentNode) V.el.remove();
      return intro(c);
    }).then(function () { v.d = Date.now(); drift(c, 0); go(); });
    setTimeout(go, 4500);
  }

  function arrive() {
    var v = arriving; if (!v) return;
    try { sessionStorage.removeItem('mx-go'); } catch (x) {}
    window.__mxArrive = v;
    if (reduce()) return;
    var c = build(true), C = window.__mxCover = { el: c, v: v, pending: true };
    drift(c, Math.max(0, (Date.now() - (v.d || v.t)) / 1000));
    var ready = new Promise(function (r) { if (d.readyState === 'complete') r(); else addEventListener('load', r, { once: true }); setTimeout(r, 1800); });
    ready.then(function () {
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        var fn = function () { setTimeout(reveal, Math.max(0, 450 - (Date.now() - v.t))); };
        if (window.requestIdleCallback) requestIdleCallback(fn, { timeout: 500 }); else setTimeout(fn, 60);
      }); });
    });
    function reveal() {
      if (!c.isConnected) (d.body || d.documentElement).appendChild(c);
      if (location.hash) { var el = d.getElementById(decodeURIComponent(location.hash.slice(1))); if (el) scrollTo(0, el.getBoundingClientRect().top + scrollY); }
      c.style.pointerEvents = 'none';
      outro(c).then(function () {
        if (d.querySelector('[data-mx-own-intro]')) { c.remove(); C.pending = false; dispatchEvent(new Event('mx-reveal')); return; }
        var V = veil(c, v.fx || 'fenster', true);
        c.style.background = 'transparent';
        V.out().then(function () { c.remove(); C.pending = false; dispatchEvent(new Event('mx-reveal')); });
        setTimeout(function () { if (c.isConnected) { c.remove(); C.pending = false; dispatchEvent(new Event('mx-reveal')); } }, 3200);
      });
    }
  }
  addEventListener('pageshow', function (e) { if (e.persisted) { busy = false; var c = d.getElementById('mx-cover'); if (c && !(window.__mxCover && window.__mxCover.pending)) c.remove(); } });
  arrive();
})();
