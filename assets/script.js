// Nempatin.space — shared behavior across pages

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const mobilePanel = document.getElementById('mobilePanel');
if(hamburger && mobilePanel){
  hamburger.addEventListener('click', ()=>{
    const open = hamburger.classList.toggle('is-open');
    mobilePanel.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // close menu after tapping a link
  mobilePanel.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      hamburger.classList.remove('is-open');
      mobilePanel.classList.remove('is-open');
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>io.observe(el));
} else {
  revealEls.forEach(el=>el.classList.add('in'));
}