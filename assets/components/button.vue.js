const SlashButton = Vue.component('slash-button', {
	props: ['text', 'link'],
	template: `
		<svg class="link-button" viewBox="0 0 250 70">
			<router-link v-bind:to="link">
				<polygon points="6,6 6,64 244,64 244,34 204,6"/>
				<text x="9" y="61" text-anchor="left">&nbsp;{{text}}</text>
			</router-link>
		</svg>
	`
});
