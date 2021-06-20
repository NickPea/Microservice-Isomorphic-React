// Generated using webpack-cli https://github.com/webpack/webpack-cli

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {

  entry: "./src/__APP__/entry.browser.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/public"),
  },
  devServer: {
    overlay: true,
    host: "localhost",
    open: true,
  },

  plugins: [],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
      {
        test: /\.(ts|tsx|js|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: []
          }
        }
      },
    ],
  },
};


module.exports = () => {

  //set mode
  process.env.NODE_ENV == "production"
    ? config.mode = "production"
    : config.mode = "development";

  //add plugins
  if (config.mode == "development") {
    config.plugins.push(
      new HtmlWebpackPlugin({
        templateContent: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>== DEVELOPMENT ==</title>
      </head>
      <body>
          <div id="root"></div>
      </body>
      </html>
      `
      })
    );
  }//if

  return config;
};



