const { Router } = require('express');
const router = Router();
const ctrl = require('./body.ctrl');

router.get('/:id',ctrl.get_body);

router.post('/:id',ctrl.post_body);

router.get('/delete/:user_id/:record_id',ctrl.get_record_delete);

module.exports = router;