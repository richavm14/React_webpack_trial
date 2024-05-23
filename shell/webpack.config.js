const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;

const deps = require("./package.json").dependencies;
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
  });
  module.exports = {
    mode: 'development',
    devServer: {
      static: path.join(__dirname, "dist"),
      port: 3000,
      historyApiFallback:{
        index:'/public/index.html'
      },
      // hot:false,
      // open:true,
    },
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        ]
      },
    plugins: [
      htmlPlugin,
      // new ReactRefreshWebpackPlugin(),
      new ModuleFederationPlugin({
        name: "Shell",
        filename: "remoteEntry.js",
        remotes: {
          Remote: "Remote@http://localhost:8080/remoteEntry.js"
        },
      })
    ]
  };