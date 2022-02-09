module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/100-percent/'
      : '/',
      outputDir: 'docs',
  }