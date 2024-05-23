const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const deps = require("./package.json").dependencies;

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
  });
  module.exports = {
    mode: 'development',
    devServer: {
      static: path.join(__dirname, "dist"),
      port: 8080,
      historyApiFallback:{
        index:'/public/index.html'
      },
    //   hot:false,
    //   open:true,
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
    //   new ReactRefreshWebpackPlugin(),
      new ModuleFederationPlugin({
        name: "Remote",
        filename: "remoteEntry.js",
        exposes: {
          "./Button": "./src/Button"
        },
      })
    ]
  };