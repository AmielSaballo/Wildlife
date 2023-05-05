const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const API_URL = env.development ? "" : "";
  const vars = {
    "process.env.API_URL": JSON.stringify(API_URL),
  };

  return {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      port: 3000,
      historyApiFallback: true,
    },
    module: {
      // exclude node_modules
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp|jfif)$/,
          type: "asset/resource",
        },
      ],
    },
    // pass all js files through Babel
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
  };
};
