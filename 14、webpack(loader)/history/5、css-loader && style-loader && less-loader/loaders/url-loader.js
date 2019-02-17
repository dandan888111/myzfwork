let loaderUtils = require('loader-utils');
let mime = require('mime');

function loader(source) {
    let { limit } = loaderUtils.getOptions(this);
    if (limit && limit > source.length) {
        return `module.exports="data:${mime.getType(this.resourcePath)};base64,${source.toString('base64')}"`
    } else {
        return require('./file-loader').call(this, source)
    }
}
loader.raw = true; // 图片要转换成二进制的哦！
module.exports = loader;