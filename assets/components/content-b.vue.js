const ContentB = Vue.component('content-b', {
	props: ['color', 'image', 'heading', 'p', 'text', 'link'],
	template: `
		<section class="content b" v-bind:class="color">
			<div class="b" v-bind:class="color">
				<div v-if="!image" class="image-placeholder overlay"></div>
				<img v-if="image" v-bind:src="image"/>
				<div class="container">
					<span class="cider"></span>
					<h2>{{heading}}</h2>
					<p>{{p}}</p>
					<svg class="link-button" viewBox="0 0 250 70">
						<router-link v-bind:to="link">
							<polygon points="6,6 6,64 244,64 244,34 204,6"/>
							<text x="5" y="62" text-anchor="left">{{text}}</text>
						</router-link>
					</svg>
				</div>
			</div>
		</section>
	`
})
