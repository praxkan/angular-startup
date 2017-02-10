import path from 'path';
import Webpack from 'webpack';

export default  {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.min.js'
  },
  plugins:[
    //Eliminate dupe packages
    new Webpack.optimize.DedupePlugin(),
    //Minify
    new Webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders:['babel']},
      {test: /\.css$/, loaders:['style', 'css']}
    ]
  }
}
