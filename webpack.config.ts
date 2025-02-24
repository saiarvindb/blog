import type { Configuration } from "webpack";
import "webpack-dev-server";
import HTMLWebpackPlugin from "html-webpack-plugin";

const __dirname = import.meta.dirname;

const htmlPluginOptions : HTMLWebpackPlugin.Options =
{
	template : `${__dirname}/src/index.html`,
	path : `${__dirname}/dist/`,
	filename : "index.html",
	chunks : ["main"],
};

const configuration : Configuration =
{
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: 
		{
		  directory: `${__dirname}/dist/`,
		},
		compress: true,
		port: 3000,
		historyApiFallback: true,
		hot: true,
		open: true
	},
	entry :
	{
		main : `${__dirname}/src/main.tsx`,
	},
	output :
	{
		path : `${__dirname}/dist/`,
		filename: `[name].js`,
		publicPath: "/",
	},
	resolve:
	{
	},
	module :
	{
		rules :
		[
			{
				test : /\.tsx?$/,
				use: 
				{
					loader : "ts-loader",
					options :
					{
						transpileOnly: true
					}
				},
				exclude: /node_modules/
			},
			{
				test : /\.mdx?$/,
				use: 
				[
					{
						loader : "@mdx-js/loader",
						options:
						{
							jsxImportSource : "react",
							providerImportSource : "@mdx-js/react"
						}
					},
				],
				exclude: /node_modules/
			}
		]
	},
	plugins:
	[
		new HTMLWebpackPlugin(htmlPluginOptions),
	]
}

export default configuration;
