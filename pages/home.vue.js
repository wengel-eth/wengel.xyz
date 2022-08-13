const Home = Vue.component('home', {
	template: `
		<container class="page-body">
			<section class="title-slide home top left"
				style="background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2)),url('https://ik.imagekit.io/wengel/wengel_xyz/IMG_7325_lm1xxNeU8c6t.jpg?tr=w-1440,pr-true');">
				<h1>William Engel.</h1>
			</section>
			<content-a color="dark-blue"
				image="https://ik.imagekit.io/wengel/wengel_xyz/twitter-mockup_I3xIzXzBM.jpg?tr=w-1440,pr-true"
				link="https://twitter.com/wengel_eth"
				heading="Tweeter of Truth."
				p="The world needs more people willing to tell the truth, not less. Whether the entire world is against it or not, my tweets mainly compromise with Biblical takes on contemporary issues. “All flesh is like grass, and all its glory like the flower of grass. The grass withers, and the flower falls off, but the word of the Lord endures forever.” (1 Peter 1:24-25a)"
			></content-a>
			<content-a color="dark-blue"
				image="https://ik.imagekit.io/wengel/wengel_xyz/IMG_9820_1QFj9qXS2-x.jpg?tr=w-1440,pr-true"
				link="/projects"
				heading="Designer of Graphics."
				p="Graphic and Website design are one of my passions. I love spending countless hours figuring out the intricacies of design and pushing it to the limits. Here are some of my finish/ongoing design projects that you can check out right now."
			></content-a>
			<content-a color="dark-blue"
				image="https://ik.imagekit.io/wengel/wengel_xyz/IMG_0250_ATRfb6sMQcXB.jpg?tr=w-1440,pr-true"
				link="/"
				heading="Constructor of Games."
				p="Here is some minor filler text to make is seem like there’s actually important stuff here."
			></content-a>
		</container>
	`
});
