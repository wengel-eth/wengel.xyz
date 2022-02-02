const d = new Date();

const routes = [
	{path: '/', component: Home},
	{path: '/contact', component: Contact},
	{path: '/404', component: ErrorPage},
	{path: '/*', redirect: '/404'}
];

const router = new VueRouter({
	routes
});

const app = new Vue({
	el : '#app',
	data : {
		currentRoute : window.location.pathname,
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
	computed : {
		thisYear : function() {
			return d.getFullYear();
		}
	},
	methods : {
		toggleMenu : function() {
			this.$refs.ham.classList.toggle('open')
			this.menu.isOpen = !this.menu.isOpen
		},
		closeMenu : function() {
			if (this.menu.isOpen) {
				this.$refs.ham.classList.toggle('open')
				this.menu.isOpen = !this.menu.isOpen
			}
		},
		openMenu : function() {
			if (!this.menu.isOpen) {
				this.$refs.ham.classList.toggle('open')
				this.menu.isOpen = !this.menu.isOpen
			}
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
		var items = document.getElementsByClassName('cider');
		for (let item = 0; item < items.length; item++) { // deploys random ciders above headers
			var locol;
			try {
				let itemClassList = Array.from(items[item].parentNode.parentNode.classList);
				if (itemClassList.indexOf('dark-blue') != -1) {
					locol = 'pink';
				} else if (itemClassList.indexOf('pink') != -1) {
					locol = 'dark-blue';
				}
			} catch (err) {
				let itemClassList = Array.from(items[item].parentNode.parentNode.parentNode.classList);
				if (itemClassList.indexOf('dark-blue') != -1) {
					locol = 'pink';
				} else if (itemClassList.indexOf('pink') != -1) {
					locol = 'dark-blue';
				}
			}
			items[item].style.backgroundImage = ('url("' + this.randCider(locol) + '")');
		}
	},
	router
});

router.afterEach((to, from) => {
	app.closeMenu()
});
