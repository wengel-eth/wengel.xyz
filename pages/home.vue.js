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
						<slash-button link="/" text="Button."></slash-button>
					</div>
				</div>
			</section>
		</container>
	`
});
