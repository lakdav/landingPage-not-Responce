import './scss/main.scss';
import Swiper, { Navigation } from 'swiper';

const swiper = new Swiper('.swiper', {
	modules: [Navigation],
	loop: true,
	speed: 300,
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
		nextEl: '.sw-button-next',
		prevEl: '.sw-button-prev',
	},
});
const swiper1 = new Swiper('.clients__slider', {
	modules: [Navigation],
	loop: true,
	speed: 300,
	slidesPerView: 1,
	navigation: {
		nextEl: '.cl-button-next',
		prevEl: '.cl-button-prev',
	},
});

const progress = document.getElementById('progress1');
const facts = document.getElementById('facts');

window.addEventListener('load', () => {
	// swiper();
	// swiper1();
	console.log(facts);
	const circleLength = Math.round(progress.getTotalLength());
	facts.style.setProperty('--dasharray', circleLength);
});
