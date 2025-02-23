import type { Configuration } from "webpack";

const __dirname = import.meta.dirname;

const configuration : Configuration =
{
	mode: "production",
	entry :
	{
		main : `${__dirname}/src/main.tsx`,
	},
	output :
	{
		path : `${__dirname}/dist/`,
		filename: `[name].js`
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
				test : /\.mdx/,
				use: 
				{
					loader : "@mdx-js/loader",
				},
				exclude: /node_modules/
			}
		]
	}
}

export default configuration;
