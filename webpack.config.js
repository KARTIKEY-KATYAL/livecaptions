const path = require("path");

module.exports = {
  entry: "./src/index.js", // Update this path based on your project structure
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Update this path based on your project structure
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      },
      // Other rules for handling different file types
    ],
  },
  // Other configuration options
};
