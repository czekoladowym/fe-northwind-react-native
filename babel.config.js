module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-export-namespace-from'],
      ['module-resolver', {
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@types': './src/types',
        },
      }],
      ['react-native-reanimated/plugin', {
        relativeSourceLocation: true,
      }],
    ],
  }
};