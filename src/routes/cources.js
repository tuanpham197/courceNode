const express = require('express');

const router = express.Router();
const CourceController = require('../app/controllers/CourceController');

router.get('/create',CourceController.create);
router.post('/store',CourceController.store);
router.get('/:slug',CourceController.show);

module.exports = router;
