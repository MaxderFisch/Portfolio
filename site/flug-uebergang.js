// Seitenübergang Hauptseite <-> Drohnenseite (Start / Landung)
(function () {
  const M = "font-family:ui-monospace,'SF Mono',Menlo,Consolas,monospace;";
  const CL = "font-family:'Clash Display',system-ui,sans-serif;";
  const E = 'cubic-bezier(.77,0,.18,1)', E1 = 'cubic-bezier(.16,1,.3,1)';
  const pad = n => String(Math.max(0, Math.round(n))).padStart(3, '0');
  const reduced = () => matchMedia('(prefers-reduced-motion:reduce)').matches;

  function overlay(mode, startN, title) {
    const o = document.createElement('div');
    o.setAttribute('data-flug', '');
    o.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#060607;color:#f2f2f2;overflow:hidden;pointer-events:all';
    const C = 'rgba(255,255,255,.85)', g = 'linear-gradient(' + C + ',' + C + ')';
    const corners = ['0 0/40px 2px', '0 0/2px 40px', '100% 0/40px 2px', '100% 0/2px 40px', '0 100%/40px 2px', '0 100%/2px 40px', '100% 100%/40px 2px', '100% 100%/2px 40px'].map(x => g + ' ' + x + ' no-repeat').join(',');
    const P = 'clamp(32px,4vw,56px)';
    o.innerHTML =
      '<div style="position:absolute;inset:clamp(14px,2.4vw,30px);background:' + corners + '"></div>' +
      '<div style="position:absolute;top:' + P + ';left:' + P + ';' + M + 'font-size:11px;letter-spacing:.16em;display:flex;gap:9px;align-items:center"><span data-rec style="width:8px;height:8px;border-radius:50%;background:#ff3b30"></span>' + (mode === 'takeoff' ? 'ARMED' : 'LANDING') + '</div>' +
      '<div style="position:absolute;top:' + P + ';right:' + P + ';' + M + 'font-size:11px;letter-spacing:.16em">MODE · ' + (mode === 'takeoff' ? 'TAKEOFF' : 'RTH') + '</div>' +
      '<div data-fc style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px">' +
        '<div style="display:flex;align-items:baseline;gap:12px"><span data-n style="' + CL + 'font-weight:700;font-size:clamp(110px,22vw,340px);line-height:.8;letter-spacing:-.04em;font-variant-numeric:tabular-nums">' + pad(startN) + '</span><span style="' + CL + 'font-weight:600;font-size:clamp(24px,3vw,44px)">M</span></div>' +
        '<div style="' + M + 'font-size:11px;letter-spacing:.3em;color:#8d8d92">ALT · MAX 120</div>' +
      '</div>' +
      '<div style="position:absolute;right:' + P + ';top:50%;transform:translateY(-50%);width:18px;height:240px;overflow:hidden;border-left:1px solid #fff"><div data-ruler style="position:absolute;inset:0;background:repeating-linear-gradient(to bottom,#fff 0 1px,transparent 1px 50px) 0 0/16px 50px repeat-y,repeating-linear-gradient(to bottom,#fff 0 1px,transparent 1px 10px) 0 0/7px 10px repeat-y"></div><div style="position:absolute;left:-1px;top:50%;width:18px;height:2px;margin-top:-1px;background:#fff"></div></div>' +
      '<div style="position:absolute;left:' + P + ';bottom:calc(' + P + ' + 14px);overflow:hidden;padding-bottom:.1em"><div data-t style="' + CL + 'font-weight:700;font-size:clamp(40px,7vw,110px);line-height:.9;letter-spacing:-.022em;word-spacing:.06em;transform:translateY(110%)">' + title + '</div></div>' +
      '<div style="position:absolute;left:' + P + ';right:' + P + ';bottom:' + P + ';height:2px;background:rgba(255,255,255,.18)"><div data-bar style="height:100%;background:#fff;transform:scaleX(0);transform-origin:left"></div></div>';
    document.body.appendChild(o);
    const rec = o.querySelector('[data-rec]');
    let b = 0; o._blink = setInterval(() => { if (rec) rec.style.opacity = (b++ % 4 < 2) ? 1 : .15; }, 220);
    return o;
  }
  function count(o, from, to, dur, delay) {
    const n = o.querySelector('[data-n]'), r = o.querySelector('[data-ruler]');
    setTimeout(() => {
      const t0 = performance.now();
      const f = () => {
        const p = Math.min(1, (performance.now() - t0) / dur), e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        const v = from + (to - from) * e;
        if (n) n.textContent = pad(v);
        if (r) r.style.backgroundPosition = '0 ' + (v * 6) + 'px,0 ' + (v * 6) + 'px';
        if (p < 1) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    }, delay || 0);
  }
  function go(href, flag, delay) {
    setTimeout(() => { try { sessionStorage.setItem('flug', flag); } catch (e) {} location.href = href; }, delay);
  }

  // Abflug: Kreis öffnet sich am Klickpunkt, Höhe zählt 000 -> 120
  function takeoff(href, x, y) {
    if (reduced()) { location.href = href; return; }
    const o = overlay('takeoff', 0, 'Flieg mit mir.');
    o.animate([{ clipPath: 'circle(0px at ' + x + 'px ' + y + 'px)' }, { clipPath: 'circle(150vmax at ' + x + 'px ' + y + 'px)' }], { duration: 750, easing: E, fill: 'both' });
    const fc = o.querySelector('[data-fc]');
    fc.animate([{ opacity: 0, transform: 'scale(.82)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 700, delay: 300, easing: E1, fill: 'both' });
    o.querySelector('[data-bar]').animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 1450, delay: 200, easing: 'linear', fill: 'both' });
    o.querySelector('[data-t]').animate([{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], { duration: 800, delay: 650, easing: E1, fill: 'both' });
    count(o, 0, 120, 1050, 350);
    setTimeout(() => fc.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(1.7)' }], { duration: 380, easing: 'cubic-bezier(.7,0,.84,0)', fill: 'forwards' }), 1450);
    go(href, 'takeoff', 1800);
  }
  // Landung: Fläche fällt von oben, Höhe zählt 120 -> 000
  function landing(href, title) {
    if (reduced()) { location.href = href; return; }
    const o = overlay('landing', 120, title || 'Zurück zum Portfolio.');
    o.animate([{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }], { duration: 750, easing: E, fill: 'both' });
    o.querySelector('[data-bar]').animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 1350, delay: 200, easing: 'linear', fill: 'both' });
    o.querySelector('[data-t]').animate([{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], { duration: 800, delay: 550, easing: E1, fill: 'both' });
    count(o, 120, 0, 1050, 300);
    go(href, 'landing', 1650);
  }
  // Ankunft auf der neuen Seite: Overlay steht schon, dann weg
  function arrive(onReveal) {
    let f = null;
    try { f = sessionStorage.getItem('flug'); sessionStorage.removeItem('flug'); } catch (e) {}
    if (!f || reduced()) return false;
    const takeoffArr = f === 'takeoff';
    const o = overlay(takeoffArr ? 'takeoff' : 'landing', takeoffArr ? 120 : 0, takeoffArr ? 'Flieg mit mir.' : 'Gelandet.');
    o.querySelector('[data-t]').style.transform = 'none';
    o.querySelector('[data-bar]').style.transform = 'scaleX(1)';
    const fc = o.querySelector('[data-fc]');
    fc.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: takeoffArr ? 'scale(1.6)' : 'scale(.7)' }], { duration: 650, delay: 120, easing: E, fill: 'forwards' });
    const a = o.animate([{ clipPath: 'inset(0 0 0 0)' }, { clipPath: takeoffArr ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)' }], { duration: 1000, delay: 280, easing: E, fill: 'forwards' });
    a.onfinish = () => { clearInterval(o._blink); o.remove(); };
    if (onReveal) setTimeout(onReveal, 420);
    return true;
  }
  // Klicks abfangen: test(href) entscheidet, welche Links den Übergang bekommen
  function bind(test, run) {
    const h = e => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      const href = a.getAttribute('href');
      if (!test(href)) return;
      if (document.querySelector('[data-flug]')) { e.preventDefault(); return; }
      e.preventDefault();
      run(href, e.clientX, e.clientY);
    };
    addEventListener('click', h, true);
    return () => removeEventListener('click', h, true);
  }
  window.FlugUebergang = { takeoff, landing, arrive, bind };
})();
