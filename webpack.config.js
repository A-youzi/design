  const path = require('path'); 
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

  const extractCSS = new ExtractTextPlugin('css/main.css');
  const extractLESS = new ExtractTextPlugin('css/bootstrap.css');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'js/main.js',
      path: path.resolve(__dirname, 'dist')
    },
      devtool:"inline-source-map",
      devServer: {
         contentBase: './dist'
      },
      //模块
   module: {
       //规则(模块的配置以什么样的方式加载)
     rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      },
      {
        test: /\.less$/i,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         loader: 'file-loader',
         options: {
             outputPath: 'images/'
         }
       },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'image-webpack-loader'
        
        },
      {
          test:/.woff|.woff2|.svg|.eot|.ttf/,
          loader:'file-loader',
          options:{
//              limit:10000,
              publicPath: '../fonts/',
              outputPath: 'fonts/',
              name:'[hash].[ext]'
          }
      }
     ] 
   },
    plugins: [
        extractCSS,
        extractLESS
    ]
  };
  