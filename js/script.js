const currentLocation = window.location.pathname;

// seleciona todos os links do site (header + footer)
const menuLinks = document.querySelectorAll('nav.menu a');


menuLinks.forEach(link => {
  if (link.getAttribute('href') === "." + currentLocation ||
    link.getAttribute('href') === currentLocation ||
    (currentLocation === "/" && link.getAttribute('href') === "./")) {
    link.classList.add("active");
  }
});




document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const icon = button.querySelector(".faq-icon");

    if (faqItem.classList.contains("active")) {
      answer.style.maxHeight = null;
      answer.style.opacity = 0;
      icon.textContent = "+";
      faqItem.classList.remove("active");
    } else {
      // fecha todos os outros
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".faq-answer").style.maxHeight = null;
        item.querySelector(".faq-answer").style.opacity = 0;
        item.querySelector(".faq-icon").textContent = "+";
      });

      // abre o atual
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.opacity = 1;
      icon.textContent = "–";
      faqItem.classList.add("active");
    }
  });
});



const toggle = document.getElementById("darkModeToggle");
const body = document.body;

// Carregar preferencia salva
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

const el = document.querySelector(".scroll-text h1");

window.addEventListener("scroll", () => {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
    el.classList.add("visible");
  } else {
    el.classList.remove("visible"); // tira essa linha se quiser que fique sempre ativo depois
  }
});

const input = document.getElementById('quiz-input');
const progress = document.querySelector('.progress-bar .progress');

input.addEventListener('input', () => {
  if (input.value.length > 0) {
    progress.style.width = '33%';
  } else {
    progress.style.width = '0%';
  }
});