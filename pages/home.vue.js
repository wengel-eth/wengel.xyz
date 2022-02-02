const Home = Vue.component('home', {
	template: `
		<container class="page-body">
			<section class="title-slide top left">
				<h1>This is a heading.</h1>
			</section>
			<section class="content a dark-blue">
				<div class="container">
					<span class="cider"></span>
					<h2>This is another heading.</h2>
					<p>Here is some minor filler text to make is seem like there’s actually important stuff here.</p>
				</div>
				<div class="image-placeholder"></div>
			</section>
			<section class="content b dark-blue">
				<div class="b">
					<div class="image-placeholder overlay"></div>
					<div class="container">
						<span class="cider"></span>
						<h2>This is another heading.</h2>
						<p>Here is some minor filler text to make is seem like there’s actually important stuff here.</p>
						<svg class="link-button" viewBox="0 0 250 70">
							<a href="/">
								<polygon points="6,6 6,64 244,64 244,34 204,6"/>
								<text x="5" y="62" text-anchor="left">Button.</text>
							</a>
						</svg>
					</div>
				</div>
			</section>
		</container>
	`
});
