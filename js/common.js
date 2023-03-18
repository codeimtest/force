var swiper = new Swiper(".roadmap-carousel", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	slidesPerView: 1.2,
	watchOverflow: true,
	loop: false,
	
	navigation: {
		nextEl: ".carousel-next",
		prevEl: ".carousel-prev",
	},
	breakpoints: {
		992: {
			slidesPerView: 4,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2.3,
			spaceBetween: 0,
		},
	}
});
var swiper = new Swiper(".testimonials-carousel", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	slidesPerView: 2.2,
	watchOverflow: true,
	loop: false,
	spaceBetween: 10,
	navigation: {
		nextEl: ".testimonial-next",
		prevEl: ".testimonial-prev",
	},
	breakpoints: {
		992: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
	}
});

$('.gallery').each(function() {
	$(this).magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
});

$('.tab').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  
  target = $(this).attr('href');
  $('.contact-tabs-content > div').not(target).hide();
	$('.contact-tabs-content > div').addClass('active');
	$('.contact-tabs-content > div').not(target).toggleClass('active');
  $(target).fadeIn(600);

});

$('input,textarea').on('input click focus', function() {
	$(this).next('label').addClass('active');
}).blur(function() {
	if ($(this).val() === '') {
		$(this).next('label').removeClass('active');
		$('.phone-input').val('')
	}
});

$('.phone-input').mask('+7 (999) 999-99-99').on('click', function () {
	if ($(this).val() === '_ (___) ___-__-__') {
			$(this).get(0).setSelectionRange(0, 0);
	}
});
$('.toggle-button').click(function(){
	$('header').toggleClass('active');
	$(this).toggleClass('active')
	$('.toggle-menu').toggleClass('active')
})
//faq accordeon
var toggleActiveElements = document.querySelectorAll(".toggle-accordion");
for (var i = 0; i < toggleActiveElements.length; i++) {
    toggleActiveElements[i].addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });
}