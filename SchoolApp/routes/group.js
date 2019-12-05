const express = require('express')
const router = express.Router()
const passport = require('passport')
const {authorize} = require('../middleware/authorize')
const enRoles = require('../models/enums/enRoles')

const controller = require('../controllers/group')

router.get('/', passport.authenticate('jwt', {session: false}), authorize([enRoles.Admin]), controller.getAll)
router.get('/:id', passport.authenticate('jwt', {session: false}), authorize([enRoles.Admin]), controller.getById)
router.post('/', passport.authenticate('jwt', {session: false}), authorize([enRoles.Admin]), controller.create)
router.put('/', passport.authenticate('jwt', {session: false}), authorize([enRoles.Admin]), controller.update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), authorize([enRoles.Admin]), controller.remove)

module.exports = router