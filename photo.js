const portrait = document.querySelector('.portrait');

if (portrait) {
  const photo = document.createElement('img');
  photo.src = 'assets/maisa-franca.jpg';
  photo.alt = 'Maisa França, psicóloga';
  photo.width = 530;
  photo.height = 530;
  portrait.prepend(photo);
}
