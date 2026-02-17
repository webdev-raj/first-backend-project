const Imagekit = require("@imagekit/nodejs")

const imageKit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

const uploadImageToImageKit = (file) => {
    const response = imageKit.files.upload({
        file:file.buffer.toString("base64"),
        fileName:"image.jpg",
    })
    return response;
}

module.exports = uploadImageToImageKit;