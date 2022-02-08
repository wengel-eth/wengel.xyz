const Form = Vue.component('slash-form', {
	props: ['color'],
	template: `
		<section class="content form" v-bind:class="color">
			<div class="container">
				<form name="contact" netlify>
					<div class="names">
						<input name="Name" type="text" placeholder="Name">
						<input name="Email" type="email" placeholder="Email">
					</div>
					<div class="comment">
						<textarea name="Comment" rows="6" placeholder="Comment"></textarea>
					</div>
					<button class="link-button" type="submit">
						<svg viewBox="0 0 250 70">
							<polygon points="6,6 6,64 244,64 244,34 204,6"/>
							<text x="9" y="61" text-anchor="left">Submit.</text>
						</svg>
					</button>
				</form>
			</div>
		</section>
	`
})
