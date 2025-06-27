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

		// Progress bar
		const bar = document.createElement("div");
		bar.style.background = '#ff00ff'; // neon pink
		bar.style.boxShadow = '0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff';
		bar.style.width = '0%';
		bar.style.height = '100%';
		bar.style.transition = 'width 0.2s ease, box-shadow 0.3s ease';
		bar.style.borderRadius = '10px';
		bar.style.transition = 'width 0.2s ease-out'; // smooth transition

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
