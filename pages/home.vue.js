const Home = Vue.component('home', {
	template: `
		<container class="page-body">
			<section class="title-slide home top left"
				style="background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2)),url('https://wengel-xyz-images.nyc3.digitaloceanspaces.com/IMG_7325.jpg');">
				<h1>William Engel.</h1>
			</section>
			<content-a color="dark-blue"
				image=""
				heading="I design brands."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
			<content-a color="dark-blue"
				image="https://wengel-xyz-images.nyc3.digitaloceanspaces.com/IMG_9820.jpg"
				heading="I capture photos."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
			<content-a color="dark-blue"
				image="https://wengel-xyz-images.nyc3.digitaloceanspaces.com/IMG_0250.jpg"
				heading="I make games."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
		</container>
	`
});
