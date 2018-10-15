const v1 = {
  mode: 'production',
  devtool: 'source-map',
  entry: './v1.js',
  output: {
    library: 'uuid',
    libraryTarget: 'umd',
    filename: 'v1.js',
    globalObject: 'this' // fix window undefined issue in node
  }
}

const v3 = {
  mode: 'production',
  devtool: 'source-map',
  entry: './v3.js',
  output: {
    library: 'uuid',
    libraryTarget: 'umd',
    filename: 'v3.js',
    globalObject: 'this' // fix window undefined issue in node
  }
}

const v4 = {
  mode: 'production',
  devtool: 'source-map',
  entry: './v4.js',
  output: {
    library: 'uuid',
    libraryTarget: 'umd',
    filename: 'v4.js',
    globalObject: 'this' // fix window undefined issue in node
  }
}

const v5 = {
  mode: 'production',
  devtool: 'source-map',
  entry: './v5.js',
  output: {
    library: 'uuid',
    libraryTarget: 'umd',
    filename: 'v5.js',
    globalObject: 'this' // fix window undefined issue in node
  }
}

module.exports = [v1, v3, v4, v5]
