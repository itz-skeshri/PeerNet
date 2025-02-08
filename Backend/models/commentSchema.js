const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
        replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Nested comments
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);