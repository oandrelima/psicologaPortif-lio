const scrollItems = document.querySelectorAll('.feeling-grid, .about-grid, .path-list, .process .section-wrap, .faq, .contact');

scrollItems.forEach((item) => {
  item.classList.add('scroll-reveal');
  if (item.matches('.feeling-grid, .path-list, .process .section-wrap')) item.classList.add('stagger-group');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

scrollItems.forEach((item) => observer.observe(item));
