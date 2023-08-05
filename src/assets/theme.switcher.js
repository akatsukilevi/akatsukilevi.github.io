document.addEventListener('DOMContentLoaded', () => {
	const theme = localStorage.getItem('theme') ?? 'gruvbox';
	document.querySelector('html').setAttribute('data-theme', theme);
});

window.setTheme = function setTheme(theme) {
	localStorage.setItem('theme', theme);
	document.querySelector('html').setAttribute('data-theme', theme);
}
