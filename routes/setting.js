const express = require('express')
const router = express.Router()
const passport = require('passport')
const {authorize} = require('../middleware/authorize')
const enRoles = require('../models/enums/enRoles')

const controller = require('../controllers/setting')

router.get('/', passport.authenticate('jwt', {session: false}), authorize([enRoles.Admin]), controller.get)
router.put('/', passport.authenticate('jwt', {session: false}), authorize([enRoles.Admin]), controller.update)

module.exports = router