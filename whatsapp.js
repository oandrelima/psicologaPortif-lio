const whatsappUrl = 'https://wa.me/5575983723905?text=' + encodeURIComponent('Olá, Maisa! Gostaria de saber mais sobre o agendamento de uma sessão.');
const bookingLinks = document.querySelectorAll('.nav-cta, .button.primary, .button.sand, .contact-card, .about-copy .text-link.dark');

bookingLinks.forEach((link) => {
  link.href = whatsappUrl;
  link.target = '_blank';
  link.rel = 'noreferrer';
});

const contactCard = document.querySelector('.contact-card');
if (contactCard) {
  contactCard.querySelector('span').textContent = 'Agende sua conversa pelo WhatsApp';
  contactCard.querySelector('b').firstChild.nodeValue = '+55 75 98372-3905 ';
}

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 10), { passive: true });
