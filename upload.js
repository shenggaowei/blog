const PicGo = require('picgo')
const picGo = new PicGo() // 将使用默认的配置文件：~/.picgo/config.json

// 上传具体路径下的图片
const images = process.argv.filter((val, index) => index > 1)
picGo.upload(images)
