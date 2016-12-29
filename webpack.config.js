// path, require
// path
var path = require("path");

// dist dir
// path
// resolve
// __dirname, current dir, no "/"
// dist, next to src
var DIST_DIR = path.resolve(__dirname, "dist");

// src dir
// path
// resolve
// __dirname, current dir, no "/"
// src
var SRC_DIR = path.resolve(__dirname, "src");

// var
// config
var config = {
  // entry point
  // src_dir
  // /app
  // /index.js
  entry: SRC_DIR + "/app/index.js",
  
  // output
  output: {
    // output path
    // dist dir, next to src
    // __dirname/dist/app/bundle.js
    path: DIST_DIR + "/app",
    // filename bundle.js
    filename: "bundle.js",
    // public path
    // /app/
    publicPath: "/app/"
    },
    
    // module
    module: {
      // loaders
      // array
      loaders: [
        {
          // test
          // //
          // \.js?
          test: /\.js?/,
          // include src_dir
          include: SRC_DIR,
          // babel loader
          loader: "babel-loader",
          // query
          query: {
            // preset
            // react
            // es2015
            // stage-2
            // https://tc39.github.io/process-document/, lower number powerful
            presets: ["react", "es2015", "stage-2"]
          }
        }
      ]
    }
};

// module exports
// config
module.exports = config;
