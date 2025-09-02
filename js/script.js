document.addEventListener('DOMContentLoaded', () => {
  const langPrefix = /^\/(en|pt-br)(?=\/|$)/i;

  const normalize = (path) => {

    try { path = new URL(path, window.location.origin).pathname; } catch (e) { }
    return path
      .replace(langPrefix, '')
      .replace(/\/index\.html?$/i, '')
      .replace(/\.html?$/i, '')
      .replace(/\/+$/, '')
      .toLowerCase() || '/';
  };

  const current = normalize(window.location.pathname);

  document.querySelectorAll('nav a[href]').forEach(a => {
    const target = normalize(a.getAttribute('href'));

    const isHome = target === '/';
    const match = current === target || (isHome && current === '/');

    if (match) a.classList.add('active');
  });
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

