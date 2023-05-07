const path = require('path');

module.exports = {
  entry: './src/chakra.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chakra.js',
    library: {
      name: ['ChakraUIReact', 'ChakraUITheme', 'ChakraUIStyledSystem'],
      type: 'umd',
    },
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
    extensions: ['.tsx', '.ts', '.js'],
  },
};
