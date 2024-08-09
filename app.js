var swiper = new Swiper(".content", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 4,
      },
    },
    autoplay: {
      delay: 1213500,
    },
    // Infinite Loop Added
    loop: true,
  });

  let center1 = [44.043431839639794,43.01234147430672];

function init() {
	let map1 = new ymaps.Map('map-test1', {
		center: center1,
		zoom: 14.5
	});

	let placemark = new ymaps.Placemark(center1, {}, {
		iconLayout: 'default#image',
		iconImageHref: '/static/images/icons/лого-на-карте.png',
		iconImageSize: [115, 115],
		iconImageOffset: [276, -101],
        balloonShadow: false,
        balloonAutoPan: false
	});     
	map1.controls.remove('geolocationControl'); // удаляем геолокацию
  map1.controls.remove('searchControl'); // удаляем поиск
  map1.controls.remove('trafficControl'); // удаляем контроль трафика
  map1.controls.remove('typeSelector'); // удаляем тип
  map1.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map1.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map1.controls.remove('rulerControl'); // удаляем контрол правил
  map1.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map1.behaviors.disable('drag');
  map1.behaviors.disable('dblClickZoom');
  // map.behaviors.disable('rightMouseButtonMagnifier');
  map1.behaviors.disable('multiTouch');

const button = document.getElementById('button');
let isActive = false;

button.addEventListener('click', function() {
  isActive = !isActive;
  if (isActive) {
	button.classList.add('btn-map-unlock');
	map1.behaviors.enable('drag');



  } else {
		button.classList.remove('btn-map-unlock');
		map1.behaviors.disable('drag');
  }
});

	map1.geoObjects.add(placemark);
}
  let center = [44.04310676815635,43.02422500844308];

function init() {
	let map1 = new ymaps.Map('map-test1', {
		center: center,
		zoom: 14.5
	});

	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: './static/images/icons/лого-на-карте.png',
		iconImageSize: [115, 115],
		iconImageOffset: [0, -115],
        // balloonShadow: false,
        // balloonAutoPan: false
	});     
	map1.controls.remove('geolocationControl'); // удаляем геолокацию
  map1.controls.remove('searchControl'); // удаляем поиск
  map1.controls.remove('trafficControl'); // удаляем контроль трафика
  map1.controls.remove('typeSelector'); // удаляем тип
  map1.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map1.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map1.controls.remove('rulerControl'); // удаляем контрол правил
  map1.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map1.behaviors.disable('drag');
  map1.behaviors.disable('dblClickZoom');
  map1.behaviors.disable('rightMouseButtonMagnifier');
  map1.behaviors.disable('multiTouch');

const button = document.getElementById('button');
let isActive = false;

button.addEventListener('click', function() {
  isActive = !isActive;
  if (isActive) {
	button.classList.add('btn-map-unlock');
	map1.behaviors.enable('drag');
  map1.behaviors.enable('multiTouch');
  map1.behaviors.enable(['scrollZoom'])
  } else {
		button.classList.remove('btn-map-unlock');
		map1.behaviors.disable('drag');
    map1.behaviors.disable('multiTouch');
    map1.behaviors.disable(['scrollZoom'])
  }
});

	map1.geoObjects.add(placemark);
}
ymaps.ready(init);
document.getElementById('scrollButton0').addEventListener('click', function() {
  document.querySelector('.welcome').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollButton1').addEventListener('click', function() {
  document.querySelector('.direction').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollButton2').addEventListener('click', function() {
  document.querySelector('.coaches').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollButton3').addEventListener('click', function() {
  document.querySelector('.equipment').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollButton4').addEventListener('click', function() {
  document.querySelector('.abonements').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollButton5').addEventListener('click', function() {
  document.querySelector('.contacts').scrollIntoView({ behavior: 'smooth' });
});