const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production', // Ensure it's in production mode
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // This should point to your source HTML file
    }),
  ],
};
