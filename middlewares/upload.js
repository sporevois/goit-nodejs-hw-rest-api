const multer = require('multer');
const path = require('path');

const tempDir = path.resolve(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: multerConfig,
    fileFilter: (req, file, cb) =>{
    if (file.mimetype === 'image/png' || file.mimetype === 'image/gif' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/bmp' || file.mimetype === 'image/tiff') 
    {
        return cb(null, true);
    } else {
        cb(null, false);
    }
}
})

module.exports = upload;