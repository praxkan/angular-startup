import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default  {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'app.min.js'
  },
  plugins:[
    //Create new index.template.html from template in app folder
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/app/index.template.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders:['babel-loader']},
      {test: /\.css$/, loaders:['style', 'css']}
    ]
  }
}
