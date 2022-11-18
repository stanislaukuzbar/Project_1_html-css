window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu_list'),
	menuItem = document.querySelectorAll('.menu_item'),
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		menu.classList.toggle('menu_list_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.toggle('menu_list_active');
		})
	})
})