const path = require('path');
const px2rem = require('postcss-px2rem');
module.exports = {
    devtool: '#eval-source-map', // 这个是打包的方式
    mode: 'development',
    // 入口文件
    entry: {// 入口文件。支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出，对象形式也一样。
        app: './src/index.js'
    },
    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: 'bundle.js',// 打包后的文件名
        path: path.resolve(__dirname,'./dist')// 打包后的文件存放位置
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(css|less)$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/fac ebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                px2rem({remUnit: 100})
                            ],
                        },
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader:'url-loader?limit=8192&name=./[name].[ext]',
                        options: {
                            limit: 10000,
                            name: 'dist/static/[name].[hash:8].[ext]',
                        }
                    }
                ],

            }
        ]
    },
    devServer: {
        port: 3005,
        contentBase: './dist'
    }
}