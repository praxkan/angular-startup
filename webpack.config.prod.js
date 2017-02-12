import path from 'path';
import Webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import md5Hash from 'webpack-md5-hash';

export default  {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src/app/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].min.js'
  },
  plugins:[
    new md5Hash(),
    //Create new index.template.html from template in app folder
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/app/index.template.html',
      inject: true
    }),
    //Minify
    new Webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders:['babel-loader']},
      {test: /\.css$/, loaders:['style', 'css']}
    ]
  }
}
