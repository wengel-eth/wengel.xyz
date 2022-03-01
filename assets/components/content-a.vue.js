const ContentA = Vue.component('content-a', {
	props: ['color', 'image', 'link', 'heading', 'p'],
	template: `
		<section class="content a" v-bind:class="color">
			<div class="container">
				<span class="cider"></span>
				<h2>{{heading}}</h2>
				<p>{{p}}</p>
			</div>
			<div v-if="!image" class="image-placeholder"></div>
			<router-link v-if="link.split('://')[0] != 'https'" v-bind:to="link">
				<img v-if="image" v-bind:src="image"/>
			</router-link>
			<a v-if="link.split('://')[0] == 'https'" v-bind:href="link">
				<img v-if="image" v-bind:src="image"/>
			</a>
		</section>
	`
})
