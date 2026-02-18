const express = require("express")
const multer = require("multer")
const uploadImageToImageKit = require("./services/post.service")
const postsModel = require("./models/posts.model")
const cors = require("cors")
const app = express();
app.use(cors())
const upload = multer({
    storage: multer.memoryStorage()
})

app.post("/create-post", upload.single("image_file"), async (req, res) => {
    const file = req.file;
    const imageKitResponse = await uploadImageToImageKit(file)
    postsModel.create({
        imageUrl: imageKitResponse.url,
        caption: req.body.caption
    })
    res.status(200).json({
        message: "Post created successfully",
        imageKitResponse: imageKitResponse
    })
})

app.get("/feed", async (req, res) => {
    const posts = await postsModel.find();
    res.status(200).json({
        message: "Feed fetched successfully",
        posts: posts
    })
})

app.delete("/delete-post/:id", (req, res) => {
    const postId = req.params.id;
    postsModel.findByIdAndDelete({ _id: postId })
        .then(result => {
            res.status(200).json({
                message: "Post deleted successfully",
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Error deleting post",
                error: err
            })
        })
})

module.exports = app;