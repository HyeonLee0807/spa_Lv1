const express = require("express");
const Comments = require("../schemas/comment");
const Posts = require("../schemas/posts");

const router = express.Router();

//댓글 생성
router.post("/:postId/comments", async(req, res) => {

});

//댓글 목록조회
router.get("/:postId/comments", async(req, res) => {

});
//댓글 수정
router.put("/:postId/comments/:commentId", async(req, res) => {

});
//댓글 삭제
router.delete("/postId/comments/:commentId", async(req, res) => {

});

module.exports = router;
