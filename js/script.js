const linksInternos = document.querySelectorAll('a[href^="#"');

function scrollSuave(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");

  const section = document.querySelector(href);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollSuave);
});

const typed = new Typed("#texto-animado", {
  strings: [
    "> Hello, World!",
    "> g:~ $ init portfolio",
    "> Bem-vindo ao meu espaço.",
  ],
  typedSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
  cursorChat: "_",
});

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) 
          section.classList.add("ativo");
        else 
          section.classList.remove("ativo");
      })
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();