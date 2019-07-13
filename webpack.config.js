const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, './js/foo'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style!css!postcss" },
            {
                test: /\.scss$/,
                use: [
                {
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                },
                {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                },
                {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                },
                    {
                        loader:'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
/*            new CleanWebpackPlugin(['dist']),  /!*清理文件*!/*/
             new HtmlWebpackPlugin({
                 filename: 'index.html',
                 template:  path.join(__dirname, "index.html"),
     })
   ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    },
    mode: 'production'
};
