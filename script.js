const slides=[...document.querySelectorAll('[data-slide]')],counter=document.querySelector('[data-current]');let index=0,timer;
slides.forEach(slide=>{const image=slide.querySelector('img');if(image)slide.style.setProperty('--slide-image',`url("${image.getAttribute('src')}")`)});
function show(n){slides[index]?.classList.remove('active');index=(n+slides.length)%slides.length;slides[index]?.classList.add('active');if(counter)counter.textContent=String(index+1).padStart(2,'0')}
function stop(){clearInterval(timer);timer=null}function start(){if(slides.length>1&&!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(()=>show(index+1),10000)}
document.querySelector('[data-prev]')?.addEventListener('click',()=>{stop();show(index-1)});document.querySelector('[data-next]')?.addEventListener('click',()=>{stop();show(index+1)});
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav?.classList.toggle('open',!open)});start();
