const SlashButton = Vue.component('slash-button', {
	props: ['text', 'link'],
	template: `
		<svg class="link-button" viewBox="0 0 250 70">
			<router-link v-bind:to="link">
				<polygon points="6,6 6,64 244,64 244,34 204,6"/>
				<text x="5" y="62" text-anchor="left">{{text}}</text>
			</router-link>
		</svg>
	`
});
