var app = new Vue({
	el : '#app',
	data : {
		menu : {
			isOpen : false
		}
	},
	methods : {
		toggleMenu : function() {
			this.$refs.ham.classList.toggle('open')
			this.menu.isOpen = !this.menu.isOpen
		}
	}
});
