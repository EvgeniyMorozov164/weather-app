const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './src',    
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: ["style-loader", "css-loader"],
  //     },
  //     {
  //       test: /\.(png|jpg|jpeg|svg|gif)$/i,
  //       type: "asset/resource",
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/i,
  //       type: "asset/resource",
  //     },
  //     {
  //       test: /\.(csv|tsv)$/i,
  //       use: ["csv-loader"],
  //     },
  //     {
  //       test: /\.xml$/i,
  //       use: ["xml-loader"],
  //     },
  //   ],
  // },
});