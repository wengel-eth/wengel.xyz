const Home = Vue.component('home', {
	template: `
		<container class="page-body">
			<section class="title-slide home top left">
				<h1>William Engel.</h1>
			</section>
			<content-a color="dark-blue"
				image="https://wengel-xyz-images.nyc3.digitaloceanspaces.com/IMG_7325.jpg"
				heading="I design brands."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
			<content-a color="dark-blue"
				image=""
				heading="I capture photos."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
			<content-a color="dark-blue"
				image=""
				heading="I make games."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
			<content-b color="dark-blue"
				image=""
				heading="Snippet"
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
				link="/"
				text="Button."
			></content-b>
		</container>
	`
});
