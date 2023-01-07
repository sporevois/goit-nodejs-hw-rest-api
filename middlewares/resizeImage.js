const Jimp = require('jimp');
const { HttpErr } = require('../helpers');

const resizeImage = async (req, _, next) => {
console.log(req.file)
    try {
        const { path } = req.file;
        
        const image = await Jimp.read(path);
        await image
            .resize(250, 250)
            .write(path)          
        next();

    } catch (err) {
        next(HttpErr(400, 'No image uploaded'))
    }
}

module.exports = resizeImage;