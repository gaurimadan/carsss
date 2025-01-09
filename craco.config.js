const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "hls.js": path.resolve(__dirname, "node_modules/hls.js"),
    },
    configure: (webpackConfig) => {
      // Handle source map warnings
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        include: /node_modules\/@mediapipe/,
        use: {
          loader: "source-map-loader",
          options: {
            filterSourceMappingUrl: () => false,
          },
        },
        enforce: "pre",
      });

      return webpackConfig;
    },
  },
};
