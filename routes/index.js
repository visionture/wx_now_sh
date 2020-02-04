const express = require('express');
const router = express.Router();
const connect = require('../api').connect;
/* GET home page. */
router.get('/', function(req, res, next) {
  const {signature,timestamp,nonce,echostr}  = req.query
  const rs = connect(signature,timestamp,nonce,"rifanyy")?echostr:'';
  res.end(connect(signature,timestamp,nonce,"rifanyy")?echostr:'');
});

module.exports = router;
