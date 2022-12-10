const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode,
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vector.bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
  },
}
