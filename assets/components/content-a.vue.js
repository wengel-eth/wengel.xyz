const ContentA = Vue.component('content-a', {
	props: ['color', 'image', 'heading', 'p'],
	template: `
		<section class="content a" v-bind:class="color">
			<div class="container">
				<span class="cider"></span>
				<h2>{{heading}}</h2>
				<p>{{p}}</p>
			</div>
			<div v-if="!image" class="image-placeholder"></div>
			<img v-if="image" v-bind:src="image"/>
		</section>
	`
})