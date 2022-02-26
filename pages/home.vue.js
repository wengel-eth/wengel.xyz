const Home = Vue.component('home', {
	template: `
		<container class="page-body">
			<section class="title-slide home top left"
				style="background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2)),url('https://ik.imagekit.io/wengel/wengel_xyz/IMG_7325_lm1xxNeU8c6t.jpg');">
				<h1>William Engel.</h1>
			</section>
			<content-a color="dark-blue"
				image="https://ik.imagekit.io/wengel/wengel_xyz/engelheim_website_TYgHCU5MitL.jpg"
				heading="I design brands."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
			<content-a color="dark-blue"
				image="https://ik.imagekit.io/wengel/wengel_xyz/IMG_9820_1QFj9qXS2-x.jpg"
				heading="I capture photos."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
			<content-a color="dark-blue"
				image="https://ik.imagekit.io/wengel/wengel_xyz/IMG_0250_ATRfb6sMQcXB.jpg"
				heading="I make games."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
		</container>
	`
});
