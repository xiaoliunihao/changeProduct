var webpack=require("webpack");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var HtmlPlugin=require("html-webpack-plugin");
var OpenBrowserPlugin=require("open-browser-webpack-plugin");
module.exports={
//	entry:"./src/script/app.js",
	entry:{
		"script/app":"./src/script/app.js"
	},
	output:{
		path:__dirname +"/build",
//		filename:"app.js"
		// filename:"[name]_[hash].js"
		filename:"[name]_[chunkhash:8].js"
	},

	devServer:{
		contentBase:"./build",
		host:"localhost",
		port:7000,
		proxy:{
			"/indexList":{
				target:"http://localhost:3000",
				changeOrigin:true,
				pathRewrite:{
					"^/indexList":''
				}
			},
			"/sortdata":{
				target:"http://www.fanjiangdz.com",
				changeOrigin:true,
				pathRewrite:{
					"^/sortdata":''
				}
			},
			"/mylogin":{
				target:"http://localhost:9000",
				changeOrigin:true,
				pathRewrite:{
					"^/mylogin":""
				}
			}
		}
	},

	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'react-hot-loader!babel-loader'
			},
			{
				test:/\.jsx$/,
				exclude:/node_modules/,
				loader:'react-hot-loader!babel-loader'
			},
//			{
//				test:/\.css$/,
//				loader:"style-loader!css-loader"
//			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader"
				})
			},
//			{
//				test:/\.scss$/,
//				loader:"style-loader!css-loader!sass-loader"
//			}
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader!sass-loader"
				})
			}
		]
	},
	plugins:[
		new ExtractTextPlugin({
			// filename:"[name]_[hash].css",
			filename:"app.css",
			allChunks:true,
			disable:false
		}),
		new HtmlPlugin({
			template:"./src/index.ejs",
			filename:"index.html",
			title:"定制生活——————专属你的魅力",
			name:"kailong"
		}),
//		new webpack.optimize.UglifyJsPlugin({
//			compress:{
//				warnings:false
//			},
//			output:{
//				comments:false
//			}
//		}),
		// new OpenBrowserPlugin({
		// 	url:"http://localhost:7000"
		// })
		new webpack.DefinePlugin({
	      'process.env': {
	        NODE_ENV: JSON.stringify('production')
	      }
	    })
	],
	externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter'
  }
	
}
