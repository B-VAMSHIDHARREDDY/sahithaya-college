const cursor = document.getElementById('cursor'), ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
(function ar() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(ar); })();
document.querySelectorAll('a,button,.course-card,.fac-card,.fty-card,.gb-item,.about-card,.loc-card,.testi-card').forEach(el => {
  el.addEventListener('mouseenter', () => { ring.style.width = '50px'; ring.style.height = '50px'; ring.style.borderColor = '#FF9A62'; cursor.style.transform = 'translate(-50%,-50%) scale(0.3)'; });
  el.addEventListener('mouseleave', () => { ring.style.width = '32px'; ring.style.height = '32px'; ring.style.borderColor = '#FF6B35'; cursor.style.transform = 'translate(-50%,-50%) scale(1)'; });
});
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  document.getElementById('scroll-bar').style.width = pct + '%';
  document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 10);
});
const hb = document.getElementById('hamburger'), mm = document.getElementById('mobileMenu');
hb.addEventListener('click', () => {
  hb.classList.toggle('active'); const o = hb.classList.contains('active');
  mm.style.display = o ? 'flex' : 'none'; setTimeout(() => { if (o) mm.classList.add('open'); }, 10);
  document.body.style.overflow = o ? 'hidden' : '';
});
document.querySelectorAll('.mob-link').forEach(a => { a.addEventListener('click', () => { hb.classList.remove('active'); mm.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { mm.style.display = 'none'; }, 300); }); });
const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }); }, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
function animateCount(el, target, dec) { const steps = 80; let c = 0, i = 0; const inc = target / steps; const t = setInterval(() => { c += inc; i++; if (i >= steps) { c = target; clearInterval(t); } el.textContent = dec ? c.toFixed(1) : Math.floor(c) + (target >= 100 ? '+' : ''); }, 20); }
const sio = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { const t = parseFloat(e.target.dataset.target); animateCount(e.target, t, t % 1 !== 0); sio.unobserve(e.target); } }); }, { threshold: .5 });
document.querySelectorAll('.sn[data-target]').forEach(el => sio.observe(el));
function filterCourses(cat, btn) { document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); document.querySelectorAll('.course-card').forEach(c => { const show = cat === 'all' || c.dataset.cat === cat; c.style.display = show ? 'block' : 'none'; if (show) { c.classList.remove('visible'); setTimeout(() => c.classList.add('visible'), 50); } }); }
function openLightbox(src, cap) { document.getElementById('lbImg').src = src; document.getElementById('lbCaption').textContent = cap; document.getElementById('lightbox').classList.add('active'); document.body.style.overflow = 'hidden'; }
document.getElementById('lbClose').addEventListener('click', () => { document.getElementById('lightbox').classList.remove('active'); document.body.style.overflow = ''; });
document.getElementById('lightbox').addEventListener('click', function (e) { if (e.target === this) { this.classList.remove('active'); document.body.style.overflow = ''; } });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { document.getElementById('lightbox').classList.remove('active'); document.body.style.overflow = ''; } });
function loadVideo() { document.getElementById('videoThumb').innerHTML = '<iframe width="100%" height="100%" style="position:absolute;inset:0;width:100%;height:100%;border-radius:20px;" src="https://www.youtube.com/embed/UmT69NakqLM?autoplay=1&mute=1" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe>'; }
function handleSubmit() { const f = document.getElementById('fname').value.trim(), m = document.getElementById('fmobile').value.trim(), c = document.getElementById('fcourse').value; if (!f) { alert('Please enter your name.'); return; } if (!m) { alert('Please enter your mobile number.'); return; } if (!c) { alert('Please select a programme.'); return; } const btn = document.getElementById('submitBtn'); btn.textContent = '✓ Enquiry Submitted!'; btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)'; btn.style.boxShadow = '0 8px 28px rgba(34,197,94,.3)'; setTimeout(() => { btn.textContent = 'Submit Enquiry \u2192'; btn.style.background = ''; btn.style.boxShadow = ''; }, 3500); }
