const express = require('express')
const router = express.Router()
const passport = require('passport')
const {authorize} = require('../middleware/authorize')
const enRoles = require('../models/enums/enRoles')

const controller = require('../controllers/theme')

router.get('/:subjectId/:courseId',
           passport.authenticate('jwt', {session: false}),
           authorize([enRoles.Teacher]),
           controller.getByTeacher)

router.get('/:id',
           passport.authenticate('jwt', {session: false}),
           authorize([enRoles.Teacher]),
           controller.getById)
           
router.post('/', passport.authenticate('jwt', {session: false}), authorize([enRoles.Teacher]), controller.create)


module.exports = router