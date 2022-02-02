const Home = Vue.component('home', {
	template: `
		<container class="page-body">
			<section class="title-slide home top left">
				<h1>William Engel.</h1>
			</section>
			<section class="content a dark-blue">
				<div class="container">
					<span class="cider"></span>
					<h2>I design brands.</h2>
					<p>Here is some minor filler text to make is seem like there’s actually important stuff here.</p>
				</div>
				<div class="image-placeholder"></div>
			</section>
			<section class="content a dark-blue">
				<div class="container">
					<span class="cider"></span>
					<h2>I design take photos.</h2>
					<p>Here is some minor filler text to make is seem like there’s actually important stuff here.</p>
				</div>
				<div class="image-placeholder"></div>
			</section>
			<section class="content a dark-blue">
				<div class="container">
					<span class="cider"></span>
					<h2>I design make games.</h2>
					<p>Here is some minor filler text to make is seem like there’s actually important stuff here.</p>
				</div>
				<div class="image-placeholder"></div>
			</section>
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
