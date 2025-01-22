const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your JavaScript entry file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Cleans old files in dist
  },
  mode: 'development', // Set the mode to development
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Folder to serve static files
    },
    compress: true,
    port: 8080,
    open: true, // Automatically opens the browser
  },
};
