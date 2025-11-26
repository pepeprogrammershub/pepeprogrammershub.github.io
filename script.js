// Theme toggle with persistence
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('pepe-theme');
  if(saved){ root.classList.toggle('light', saved === 'light'); }
  const btn = document.getElementById('themeBtn');
  const setIcon = () => btn.textContent = root.classList.contains('light') ? '🌞' : '🌙';
  setIcon();
  btn.addEventListener('click',()=>{
    root.classList.toggle('light');
    localStorage.setItem('pepe-theme', root.classList.contains('light')?'light':'dark');
    setIcon();
  });
})();

// Mobile drawer
(function(){
  const btn = document.getElementById('menuBtn');
  const drawer = document.getElementById('mobileNav');
  btn.addEventListener('click',()=>{
    const open = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));
})();




/* -- Removed
// WhatsApp CTA (prefill message)
(function(){
  const link = document.getElementById('whatsAppCta');
  const msg = encodeURIComponent("Hi, I am interested in joining Pepe Programming Hub. My name is ________.");
  link.href = `https://wa.me/2349066115252?text=${msg}`;
})();
*/




/* -- Removed
//Join button — redirects to Google Form
(function() {
  const btn = document.getElementById('joinBtn');
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfSd1mRVW-h4aLwZyTTww5hnSufNU0mxLSa86f7H0TmwtsEXA/viewform?usp=header";

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(formURL, '_blank');
  });
})();
*/

// Intersection-based reveal animations
(function(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }});
  }, { threshold:.15 });
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();

// Testimonials rotator
(function(){
  const quotes = [
    {t:"Pepe Programming Hub gave me the confidence to build my first website. Now I'm teaching my friends how to code too!", a:"— Sarah, 15"},
    {t:"The mentors are so friendly and helpful. I love the community projects and challenges!", a:"— James, 16"},
    {t:"Before joining, I thought coding was too hard. But the tutorials made it easy and fun!", a:"— Emily, 14"},
    {t:"I've learned Python, made a game, and even presented my app to my school! Thanks Pepe Hub!", a:"— Aiden, 17"}
  ];
  let i = 0; const el = document.getElementById('tList');
  const render = ()=>{ el.style.opacity = 0; setTimeout(()=>{ el.innerHTML = `<div>“${quotes[i].t}”</div><div style="margin-top:.6rem;font-weight:800;color:var(--brand)">${quotes[i].a}</div>`; el.style.opacity = 1; }, 200); };
  render(); setInterval(()=>{ i = (i+1)%quotes.length; render(); }, 4200);
})();
