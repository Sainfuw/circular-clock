function getTotalMinutes(ct) {
	const hours = ct.getHours();
	const minutes = ct.getMinutes();

	return hours * 60 + minutes;
}

function stringDate(time) {
	return time.toString().length === 1 ? `0${time}` : time;
}

function changeAngle() {
	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);
	const r = (vw - 44) / 2;

	const dayPercent = 720 / 1440;
	const dayAngle = dayPercent * 90 + 45;
	const radAngle = (dayAngle * Math.PI) / 180;

	const coordX = r * Math.sin(radAngle);
	const coordY = r * Math.cos(radAngle);

	const right = (coordY + r).toFixed(0);
	const bottom = (coordX - r / 1.67).toFixed(0);

	document.body.style.setProperty('--coordX', right + 'px');
	document.body.style.setProperty('--coordY', bottom + 'px');

	document.querySelector('.time-container h3').innerHTML = `${stringDate(
		currentTime.getHours()
	)}:${stringDate(currentTime.getMinutes())}`;
}

const currentTime = new Date();
const currentDate = new Intl.DateTimeFormat('es-CL', {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
});

document.querySelector('header h1').innerHTML = currentDate.format(currentTime);

changeAngle();
window.addEventListener('resize', () => changeAngle());
