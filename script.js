document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.querySelector('[data-copy-command]');
const command = document.getElementById('download-command');

if (copyButton && command) {
	copyButton.addEventListener('click', async () => {
		await navigator.clipboard.writeText(command.textContent);
		copyButton.textContent = 'Copied';
		window.setTimeout(() => {
			copyButton.textContent = 'Copy command';
		}, 1600);
	});
}
