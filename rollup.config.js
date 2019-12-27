import babel from "rollup-plugin-babel";
import minify from "rollup-plugin-babel-minify";

const pkg = require("./package.json");
const date = (new Date()).toDateString();

const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * Copyright ${date.slice(-4)} ${pkg.author.name}, ${pkg.license}
 */`;

const production = (process.env.NODE_ENV === "production");

const lib = {

	module: {
		input: "src/index.js",
		output: [{
			file: pkg.module,
			format: "esm",
			banner
		}, {
			file: pkg.main,
			format: "esm"
		}, {
			file: pkg.main.replace(".js", ".min.js"),
			format: "esm"
		}]
	},

	main: {
		input: pkg.main,
		plugins: [babel()],
		output: {
			file: pkg.main,
			format: "umd",
			name: pkg.name.replace(/-/g, "").toUpperCase(),
			banner
		}
	},

	min: {
		input: pkg.main.replace(".js", ".min.js"),
		plugins: [minify({
			bannerNewLine: true,
			comments: false
		}), babel()],
		output: {
			file: pkg.main.replace(".js", ".min.js"),
			format: "umd",
			name: pkg.name.replace(/-/g, "").toUpperCase(),
			banner
		}
	}

};

export default [lib.module, lib.main, lib.min];
