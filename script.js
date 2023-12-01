//? Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxCa0b_rb9diScc4Whn31nE2TjUeA08yrUjAU4kKtTufTn1mgXMwPMu5NE77kWSOAzH/exec';
const form = document.forms['contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

// ketika tombol submit di klik
form.addEventListener('submit', (e) => {
	e.preventDefault();
	// tampilkan tombol loading dan hilangkan tombol kirim
	btnLoading.classList.toggle('d-none');
	btnKirim.classList.toggle('d-none');

	fetch(scriptURL, {method: 'POST', body: new FormData(form)})
		.then((response) => {
			// hilangkan tombol loading dan tampilkan tombol kirim
			btnLoading.classList.toggle('d-none');
			btnKirim.classList.toggle('d-none');
			// tampilkan alert
			myAlert.classList.toggle('d-none');
			// reset formnya
			form.reset();

			console.log('Success!', response);
		})
		.catch((error) => console.error('Error!', error.message));
});

//? AOS
const galleryImage = document.querySelectorAll('.gallery-img');

galleryImage.forEach((img, i) => {
	img.dataset.aos = 'fade-down';
	img.dataset.aosDelay = i * 100;
	img.dataset.aosDuration = 1000;
});

AOS.init({
	once: true,
	duration: 200,
});

//? GSAP
gsap.registerPlugin(TextPlugin);
gsap.from('.jumbotron img', {
	duration: 1,
	y: -100,
	opacity: 0,
	rotateY: 360,
});

gsap.from('.navbar', {
	duration: 1.5,
	y: '-100%',
	opacity: 0,
	ease: 'bounce',
});

gsap.from('.display-4', {
	duration: 1,
	x: -50,
	opacity: 0,
	delay: 0.5,
	ease: 'back',
});

gsap.from('.lead', {
	duration: 2,
	delay: 1.5,
	text: '',
	ease: 'none',
});
