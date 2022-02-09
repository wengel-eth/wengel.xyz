const Contact = Vue.component('contact', {
	template: `
		<container class="page-body">
			<section class="title-slide bottom left"
				style="background-image:linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5)),url('https://wengel-xyz-images.nyc3.digitaloceanspaces.com/pigeon.jpg');background-position:top;">
				<h1>Contact Me.</h1>
			</section>
			<slash-form color="pink" form-name="contact"></slash-form>
		</container>
	`
});
