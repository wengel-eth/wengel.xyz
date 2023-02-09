const Footer = Vue.component('footer-component', {
	props: ['year'],
	template: `
		<footer class="footer">
			<div class="v-container">
				<div class="h-container">
					<div class="footer-tab">
						<h3>Online.</h3>
						<a href="https://dribbble.com/wengel_eth"><i class="fab fa-dribbble"></i></a>
						<a href="https://twitter.com/wengel_eth"><i class="fab fa-twitter"></i></a>
					</div>
					<div class="footer-tab">
						<h3>Contact.</h3>
						<router-link to="/contact"><i class="fas fa-envelope"></i></router-link>
					</div>
				</div>
				<p>William Engel &#169; {{year}}</p>
			</div>
		</footer>
	`
});
