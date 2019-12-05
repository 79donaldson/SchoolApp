const express = require('express')
const router = express.Router()
const passport = require('passport')
const {authorize} = require('../middleware/authorize')
const enRoles = require('../models/enums/enRoles')

const controller = require('../controllers/subject')

router.get('/', passport.authenticate('jwt', {session: false}), authorize([enRoles.Admin]), controller.getAll)
router.get('/teacher', passport.authenticate('jwt', {session: false}), authorize([enRoles.Teacher]), controller.getForTeacher)
router.get('/group', passport.authenticate('jwt', {session: false}), controller.getForGroup)
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById)
router.post('/', passport.authenticate('jwt', {session: false}), authorize([enRoles.Teacher]), controller.create)
router.put('/', passport.authenticate('jwt', {session: false}), authorize([enRoles.Teacher]), controller.update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), authorize([enRoles.Teacher]), controller.remove)

module.exports = router