const express = require("express");
const Comments = require("../schemas/comment");
const Posts = require("../schemas/posts");

const router = express.Router();

// 1. 전체 게시글 목록 조회 API
router.get("/", async(req, res) => {

});

// 2. 게시글 작성 API
router.post("/", async(req, res) => {

});
// 3. 게시글 조회 API
router.get("/:postId", async(req, res) => {

});
// 4. 게시글 수정
router.put("/:postId", async(req, res) => {

});
// 5. 게시글 삭제
router.delete("/:postId", async(req, res) => {

});

module.exports = router;