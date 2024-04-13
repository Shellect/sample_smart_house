const path = require("path")

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "greenhouse/static/greenhouse"),
        filename: "main.bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}