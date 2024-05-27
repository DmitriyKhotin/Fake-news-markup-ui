import webpack = require('webpack');
import webpackDevServer = require('webpack-dev-server');
import path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const target = path.resolve(__dirname, 'target');
const src = path.resolve(__dirname, 'src');
export const DEV_MODE: boolean = process.env.NODE_ENV === 'development';

type WebpackConfig = webpack.Configuration & {
  devServer: webpackDevServer.Configuration
}

const config: WebpackConfig = {
  mode: DEV_MODE ? 'development' : 'production',
  entry: ['@babel/polyfill', './src/index.tsx'],
  output: {
    path: target,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      src: src,
    },
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new TerserWebpackPlugin({
      terserOptions: {
        compress: !DEV_MODE // only if `--mode production` was passed
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, 'report.html'),
      openAnalyzer: false,
    }),
    new CssMinimizerPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', "@babel/preset-react"],
            // plugins: ['@babel/plugin-proposal-object-rest-spread'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              importLoaders: 2,
              modules: {
                localIdentName: DEV_MODE
                  ? '[path][name]__[local]'
                  : '[hash:base64]',
              },
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|ttf|eot)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kb
          },
        },
      },
    ]
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  devServer: {
    hot: true,
    port: 9000,
    static: {
      directory: target,
    },
    historyApiFallback: true,
  },
};

export default config;
