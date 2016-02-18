import _ from 'lodash';
import webpack from 'webpack';
import baseConfig from './base';
import boilerplateConfig from '../../../config';

var config = _.merge({}, baseConfig);

// Enable code compression
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress : {
            warnings: false
        }
    })
);

module.exports = config;