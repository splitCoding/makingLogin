const { Router } = require('express');
const router = Router();
const ctrl = require('./join.ctrl');

const path = require('path');
const uploadDir = path.join(__dirname, '../../uploads');

//파일 업로드를 위한 multer 세팅

const multer = require('multer');
const storage = multer.diskStorage({
  destination : (req, file, callback)=>{
    callback(null, uploadDir);
  },
  filename : ( req, file, callback)=>{
    callback(null, 'img_'+Date.now()+'.'+file.mimetype.split('/')[1]);
  }
})
const upload = multer({ storage });

router.get('/', ctrl.get_join_main);

router.post('/', upload.single('thumbnail') ,ctrl.post_join_main);

router.get('/success', ctrl.get_join_success);

router.get('/fail', ctrl.get_join_fail);

module.exports = router;