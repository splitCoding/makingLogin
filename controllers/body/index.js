const { Router } = require('express');
const router = Router();
const ctrl = require('./body.ctrl');

router.get('/:id',ctrl.get_body);

router.post('/:id',ctrl.post_body);

module.exports = router;