const express = require("express");
const router = express();
const { createWebAPIRequest } = require("../util/util");

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    offset: 0,
    uid: req.query.uid,
    limit: 1000,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/user/playlist",
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;
