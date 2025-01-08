// const { getDefaultConfig } = require('expo/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// // eslint-disable-next-line no-undef
// const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, {
//   input: './global.css',
//   inlineRem: 16,
// });

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;
