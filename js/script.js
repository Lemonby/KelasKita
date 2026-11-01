// KelasKita - script.js (opsional, hanya untuk menu mobile & panah carousel)
(function () {
  var toggle = document.querySelector('.navbar__toggle');
  var menu = document.getElementById('menu-utama');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var track = document.querySelector('.carousel__track');
  if (track) {
    var step = function () {
      var card = track.querySelector('.data-card');
      return card ? card.getBoundingClientRect().width + 14 : 300;
    };
    var prev = document.querySelector('[data-carousel="prev"]');
    var next = document.querySelector('[data-carousel="next"]');
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
  }
})();
