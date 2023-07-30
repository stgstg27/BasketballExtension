const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')


module.exports = {
	mode: "development",
	devtool: 'cheap-module-source-map',
	entry: {
		popup: path.resolve("./Frontend/src/popup/popup.tsx"),
		options: path.resolve("./Frontend/src/options/options.tsx")
	},
	module: {
		rules: [
			{
				use: "ts-loader",
				test: /\.tsx$/,
				exclude : /node_modules/,		
			},
			{
				use: ['style-loader', 'css-loader', {
					loader: 'postcss-loader', // postcss loader needed for tailwindcss
					options: {
						postcssOptions: {
							ident: 'postcss',
							plugins: [tailwindcss, autoprefixer],
						},
					},
				}],
				test: /\.css$/i
			},
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: path.resolve("manifest.json"), to: path.resolve("dist/manifest.json")} ,
				{ from: path.resolve("Frontend/src/assests/icon.png"), to: path.resolve("dist/icon.png")}
			]
		}),
		...getHtmlPlugins([
            'popup',
            'options'
		])
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: "[name].js"
	}

}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
        title: 'React Extension',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}