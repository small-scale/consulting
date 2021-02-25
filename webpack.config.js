const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },  
     ]
  },
  plugins: [
  //  new ExtractTextPlugin({filename:'app.bundle.css'}),
    new UglifyJsPlugin(),
    new CopyPlugin([
      { from: './src/static', to: "static"},
     // { from: 'CNAME'},
    ])

]
};