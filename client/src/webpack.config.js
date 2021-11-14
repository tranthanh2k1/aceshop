module.exports = {
    module: {
        rules: [
            {
                test: "./style.css",
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}