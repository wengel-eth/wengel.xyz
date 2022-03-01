const ContentB = Vue.component('content-b', {
	props: ['color', 'image', 'heading', 'p', 'text', 'link'],
	template: `
		<section class="content b" v-bind:class="color">
			<div class="b" v-bind:class="color">
				<div class="image-placeholder overlay" v-bind:style="image"></div>
				<div class="container">
					<span class="cider"></span>
					<h2>{{heading}}</h2>
					<p>{{p}}</p>
					<svg class="link-button" viewBox="0 0 250 70">
						<router-link v-if="link.split('://')[0] != 'https'" v-bind:to="link">
							<polygon points="6,6 6,64 244,64 244,34 204,6"/>
							<text x="9" y="61" text-anchor="left">{{text}}</text>
						</router-link>
						<a v-if="link.split('://')[0] == 'https'" v-bind:href="link">
							<polygon points="6,6 6,64 244,64 244,34 204,6"/>
							<text x="9" y="61" text-anchor="left">{{text}}</text>
						</a>
					</svg>
				</div>
			</div>
		</section>
	`
})
