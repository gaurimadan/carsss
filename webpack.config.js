const path = require("path");

module.exports = {
  // ... your other webpack config
  resolve: {
    alias: {
      "hls.js": path.resolve(__dirname, "node_modules/hls.js"),
    },
  },
  module: {
    rules: [
      // ... your other rules
      {
        test: /\.m?js$/,
        include: /node_modules\/@mediapipe/,
        use: {
          loader: "source-map-loader",
          options: {
            filterSourceMappingUrl: () => false,
          },
        },
        enforce: "pre",
      },
    ],
  },
};
