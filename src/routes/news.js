const express = require('express');

const router = express.Router();
const NewsController = require('../app/controllers/NewsController');

router.get('/',NewsController.index);
router.get('/show',NewsController.show);
module.exports = router;
