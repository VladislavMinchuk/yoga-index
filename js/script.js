// my js

;function slider() {
	var photoQuotes = document.querySelectorAll('.photos-quotes li'), //get all photo-quotes
		quotes 		= document.querySelectorAll('.quotes li'), //get all quotes
		trainers 	= document.querySelectorAll('.trainers li'), //get all
		bullets 	= document.querySelectorAll('.bullets li'),
		prevButton 	= document.querySelector('#slid-prev'),
		nextButton 	= document.querySelector('#slid-next'),
		i 			= 0;
	nextButton.onclick = function () {
		
		photoQuotes[i].classList.remove('opacity');
		quotes[i].classList.remove('opacity');
		trainers[i].classList.remove('opacity');
		bullets[i].classList.remove('active');
		i++;
		if (i >= quotes.length) {
			i = 0;
		};
		photoQuotes[i].classList.add('opacity');
		quotes[i].classList.add('opacity');
		trainers[i].classList.add('opacity');
		bullets[i].classList.add('active');

	}; 

	prevButton.onclick = function () {
		photoQuotes[i].classList.remove('opacity');
		quotes[i].classList.remove('opacity');
		trainers[i].classList.remove('opacity');
		bullets[i].classList.remove('active');
		i--;
		if (i < 0) {
			i = quotes.length - 1;
		};
		photoQuotes[i].classList.add('opacity');
		quotes[i].classList.add('opacity');
		trainers[i].classList.add('opacity');
		bullets[i].classList.add('active');
	};
};
slider();




//jquery
$(function(){

	$('.slider').bxSlider({});  //start bxSlider

	//якоря
	$("nav").on("click","a", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();

	//забираем идентификатор бока с атрибута href
	var id  = $(this).attr('href'),

	//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
	
	//анимируем переход на расстояние - top за 1500 мс
	$('body,html').animate({scrollTop: top}, 1500);
	
	});
});