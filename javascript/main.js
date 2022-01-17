var app = new Vue({
	el : '#app',
	data : {
		menu : {
			isHovering : false,
			isOpen : false
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
		}
	}
});
