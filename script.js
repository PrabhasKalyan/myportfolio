const all=document.querySelector('.all');
const js=document.querySelector('.js');
const C=document.querySelector('.C');
const pyml=document.querySelector('.pyml');
const dj=document.querySelector('.dj');
const proimg1=document.querySelector('.proimg1');
const proimg2=document.querySelector('.proimg2');
const proimg3=document.querySelector('.proimg3');
const proimg4=document.querySelector('.proimg4');
all.addEventListener('click',()=>{
proimg1.style.display="grid";
proimg2.style.display="grid";
proimg3.style.display="grid";
proimg4.style.display="grid";
all.style.background="rgb(226,26,109)";
C.style.background="rgb(240,240,240)"
pyml.style.background="rgb(240,240,240)";
dj.style.background="rgb(240,240,240)";
js.style.background="rgb(240,240,240)";
});
js.addEventListener('click',()=>{
    proimg1.style.display="grid";
    proimg2.style.display="none";
    proimg3.style.display="none";
    proimg4.style.display="none";
    js.style.background="rgb(226,26,109)";
    all.style.background="rgb(240,240,240)";
    C.style.background="rgb(240,240,240)"
    pyml.style.background="rgb(240,240,240)";
    dj.style.background="rgb(240,240,240)";
    });
C.addEventListener('click',()=>{
    proimg2.style.display="grid";
    proimg1.style.display="none";
    proimg3.style.display="none";
    proimg4.style.display="none";
    C.style.background="rgb(226,26,109)";
    all.style.background="rgb(240,240,240)";
    js.style.background="rgb(240,240,240)";
    dj.style.background="rgb(240,240,240)";
    pyml.style.background="rgb(240,240,240)";
    });
pyml.addEventListener('click',()=>{
    proimg3.style.display="grid";
    proimg2.style.display="none";
    proimg1.style.display="none";
    proimg4.style.display="none";
    pyml.style.background="rgb(226,26,109)";
    js.style.background="rgb(240,240,240)";
    dj.style.background="rgb(240,240,240)";
    all.style.background="rgb(240,240,240)";
    C.style.background="rgb(240,240,240)";
    });
dj.addEventListener('click',()=>{
    proimg4.style.display="grid";
    proimg2.style.display="none";
    proimg3.style.display="none";
    proimg1.style.display="none";
    dj.style.background="rgb(226,26,109)";
    all.style.background="rgb(240,240,240)";
    pyml.style.background="rgb(240,240,240)";
    C.style.background="rgb(240,240,240)";
    js.style.background="rgb(240,240,240)";
    });
const sections = document.querySelectorAll("section");
const sectionIds = Array.from(sections, (section) => section.id);
function highlightCurrentSection() {
  const scrollPosition = window.scrollY;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    if (scrollPosition >= sectionTop) {
      document.querySelector(".nav a.active")?.classList.remove("active");
      document.querySelector(`.nav a[href="#${section.id}"]`).classList.add("active");
      break;
    }
  }
}

window.addEventListener("scroll", highlightCurrentSection);

