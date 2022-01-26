Vue.component('button-slashed', {
	data : function() {
		
	}
});

var app = new Vue({
	el : '#app',
	data : {
		menu : {
			isHovering : false,
			isOpen : false
		},
		ciders : {
			'pink' : [
				'../assets/cider-a-pink.svg',
				'../assets/cider-b-pink.svg',
				'../assets/cider-c-pink.svg',
				'../assets/cider-d-pink.svg',
				'../assets/cider-e-pink.svg',
				'../assets/cider-f-pink.svg'
			],
			'dark-blue' : [
				'../assets/cider-a-dark-blue.svg',
				'../assets/cider-b-dark-blue.svg',
				'../assets/cider-c-dark-blue.svg',
				'../assets/cider-d-dark-blue.svg',
				'../assets/cider-e-dark-blue.svg',
				'../assets/cider-f-dark-blue.svg'
			]
		}
	},
	methods : {
		toggleMenu : function() {
			this.$refs.ham.classList.toggle('open')
			this.menu.isOpen = !this.menu.isOpen
		},
		toggleMenuHover : function() {
			this.$refs.ham.classList.toggle('hovering')
			this.menu.isHovering = !this.menu.isHovering
		},
		randCider : function(color) {
			return this.ciders[color][Math.floor(Math.random()*this.ciders[color].length)];
		}
	},
	mounted : function() {
		let items = document.getElementsByClassName('cider');
		for (let item = 0; item < items.length; item++) { // deploys random ciders above headers
			let itemClassList = Array.from(items[item].parentNode.parentNode.classList);
			let locol;
			if (itemClassList.indexOf('dark-blue') != -1) {
				locol = 'pink';
			} else if (itemClassList.indexOf('pink') != -1) {
				locol = 'dark-blue';
			}
			items[item].style.backgroundImage = ('url("' + this.randCider(locol) + '")');
		}
	}
});
