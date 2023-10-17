/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const { validationResult } = require('express-validator');
const user = require('../../../controllers/user/auth.controller');
const status = require('../../../utils/status.utils');
const authjwt = require('../../../middleware/authjwt');


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

router.post('/upload',authjwt, async (req, res, next) => {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    return res.send({
      success: true
    })
  }
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.send({ errors: errors.array(), success: false, status: status.BadRequest });
  // }
  // const response = await user
  //   .getUser(req.body)
  //   .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  // return res.send(response);
});



module.exports = router;
