var path = require('path');

module.exports = {
    /* 上传图片配置项 */
    upload: {
	    path: path.normalize(__dirname + '/../../..')+'/public/product/', /*--- 图片保存位置 ---*/
	    url: '/product/', /*---- 图片链接基地址，相对于public目录 -----*/
	    imageAllowFiles: ".png, .jpg, .jpeg, .gif, .bmp"  /*--- 图片扩展名限制 ---*/
    }
};