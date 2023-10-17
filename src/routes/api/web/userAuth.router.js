/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const { validationResult } = require('express-validator');
const user = require('../../../controllers/user/auth.controller');
const status = require('../../../utils/status.utils');
const authjwt = require('../../../middleware/authjwt');
const multer = require("multer");


const router = express.Router();

router.post('/add-user', async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  }
  const response = await user
    .addUser(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.post('/login-user', async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await user
      .loginUser(req.body)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
});


router.get('/get-user',authjwt, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
    }
    const response = await user
      .getUser(req.body)
      .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
    return res.send(response);
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+'.webp';
   return  cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), (req, res, next) => {

  // console.log(req.body);
  // console.log(req.file);
  return res.send({ success: true, status: 200, msg: 'success'});
  
});



module.exports = router;
