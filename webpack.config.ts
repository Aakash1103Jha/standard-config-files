import nodeExternals from "webpack-node-externals"
import path from "path"

// list of external dependencies that should be 
// included in the final build go in the VENDORS array
const VENDORS = []
module.exports = {
	mode: "production",
	entry: {
		main: "./server/index.ts",
		vendor: VENDORS,
	},
	output: {
		filename: "[name]-[contenthash].js",
		path: path.resolve(__dirname, "dist"),    // change accoring to your project
		clean: true,
	},
	target: "node",
	node: {
		__dirname: false,
		__filename: false,
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",    // change accoring to your project
				},
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js", ".json"],
	},
}
