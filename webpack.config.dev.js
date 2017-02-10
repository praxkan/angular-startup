import path from 'path';

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
  plugins:[],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders:['babel-loader']},
      {test: /\.css$/, loaders:['style', 'css']}
    ]
  }
}
