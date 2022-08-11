const Projects = Vue.component('projects', {
	template: `
		<container class="page-body">
			<section class="title-slide bottom left" style="background-image:linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5)),url('https://ik.imagekit.io/wengel/wengel_xyz/IMG_9655_z_yUF3J6VC3.jpg')">
				<h1>Projects.</h1>
			</section>
			<content-b color="dark-blue"
				image="background-image:url('https://ik.imagekit.io/wengel/wengel_xyz/engelheim_website_TYgHCU5MitL.jpg?tr=w-720,h-720,fo-auto');"
				heading="This Website."
				p="The website you are viewing right now. Handcrafted with Hypertext \
					Markup Language, styled with Cascading Stylesheets, and structured \
					with the best in class Vue Javascript framework technology with \
					a touch of Vanilla JS on top."
				link="/"
				text="View."
			></content-b>
			<content-b color="dark-blue"
				image="background-image:url('https://ik.imagekit.io/wengel/wengel_xyz/engelheim_website_TYgHCU5MitL.jpg?tr=w-720,h-720,fo-auto');"
				heading="molllo.com"
				p="Another handcrafted masterpiece. This elegant blog is curated with \
					excellent articles aimed at providing exceptional assets from across \
					the world wide web. Not only does it fund excellent items, it serves \
					as the perfect website for all graphic design inspiration purposes."
				link="https://molllo.com"
				text="View."
			></content-b>
		</container>
	`
})
