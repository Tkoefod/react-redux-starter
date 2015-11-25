module.exports = {
           entry: "./index.jsx",
           output: {
               path: __dirname,
               filename: "bundle.js"
           },
           devtool: 'source-map',
           module: {
               loaders: [
                   {
                     test: /\.jsx$/,
                     loader: 'babel-loader',
                     exclude: /(node_modules|bower_components)/
                   },
                   { test: /\.css$/, loader: "style!css" }
               ]
           },
           resolve: {
             extensions: ['', '.js', '.jsx']
           }
       };
