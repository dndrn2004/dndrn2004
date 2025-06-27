class LoadingBar {
	constructor() {
		this.domElement = document.createElement("div");
		this.domElement.style.position = 'fixed';
		this.domElement.style.top = '0';
		this.domElement.style.left = '0';
		this.domElement.style.width = '100%';
		this.domElement.style.height = '100%';
		this.domElement.style.background = '#222'; // Dark gray background
		this.domElement.style.opacity = '0.9';
		this.domElement.style.display = 'flex';
		this.domElement.style.alignItems = 'center';
		this.domElement.style.justifyContent = 'center';
		this.domElement.style.zIndex = '9999';

		// Outer base
		const barBase = document.createElement("div");
		barBase.style.background = '#444'; // medium gray
		barBase.style.width = '50%';
		barBase.style.minWidth = '250px';
		barBase.style.borderRadius = '10px';
		barBase.style.height = '15px';
		barBase.style.overflow = 'hidden';
		this.domElement.appendChild(barBase);

		const bar = document.createElement("div");

		Object.assign(bar.style, {
		background: '#ffffff', // white bar
		boxShadow: '0 0 20px rgba(255, 0, 255, 1), 0 0 40px rgba(255, 0, 255, 0.8), 0 0 80px rgba(255, 0, 255, 0.6)', // pink glow
		width: '0%',
		height: '100%',
		borderRadius: '10px',
		transition: 'width 0.2s ease-out',
		willChange: 'box-shadow, width',
		});

		barBase.appendChild(bar);
		this.progressBar = bar;

		document.body.appendChild(this.domElement);
	}

	set progress(value) {
		const percent = Math.min(100, Math.max(0, value * 100));
		this.progressBar.style.width = `${percent}%`;
	}

	set visible(value) {
		this.domElement.style.display = value ? 'flex' : 'none';
	}
}

export { LoadingBar };