const express = require('express');
const app = express();
const port = 3000;

const commentRouter = require("./routes/comments.js");
const postRouter = require("./routes/posts.js");
const connect = require("./schemas");
connect();

app.use("/", [CommentRouter, postRouter]);

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});