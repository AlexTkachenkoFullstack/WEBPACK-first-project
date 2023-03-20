const path = require('path');

module.exports = {
    entry: "./src/index.js",
   output: {
       path: path.resolve(__dirname, 'build'),
       filename: "my-bundle.js",
    },
   devServer: {
    port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
    ],
    },
}