module.exports = {
    // Other webpack configuration...
    module: {
      rules: [
        {
          test: /\.node$/,
          use: 'file-loader'
        }
      ]
    }
  };
  