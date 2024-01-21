const path = require('path');

module.exports = {
  mode: 'production', // 'production' for minified output or 'development' for debuggable output
  entry: './index.ts', // change this if your entry file is different
  output: {
    path: path.resolve(__dirname, 'dist'), // outputs your bundle to the 'dist' directory
    filename: 'index.js',
    library: 'farcasterkit',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};