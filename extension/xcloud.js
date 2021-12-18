window.addEventListener('blur', (event) => {
	event.stopImmediatePropagation();
});
setInterval( () => {
    document.querySelector(
        'div[class|="IdleWarningScreen"] button'
    )?.click()
}, 5 * 1000);