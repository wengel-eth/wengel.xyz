const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// lessc src/styles/master.less --clean-css master.css

module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter('fDate', function fDate(str) {
		let d = new Date(str);
		d = d.toDateString();
		d = d.split(' ');
		d.shift();
		let tempD = d[0];
		d[0] = parseInt(d[1]);
		d[1] = (tempD + ',');
		d = d.join(' ');
		return d;
	});
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPassthroughCopy({'src/assets' : 'assets'});
	eleventyConfig.addPassthroughCopy('src/robots.txt');
	// eleventyConfig.addPassthroughCopy({'src/styles' : 'styles'});
	return {
		passthroughFileCopy: true,
		dir: {
			input: 'src',
			output: '_site',
			layouts: '_layouts',
			data: '_data'
		}
	}
};
