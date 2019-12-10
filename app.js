const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const path = require('path')

//---------------routes-----------------------
const authRouter = require('./routes/auth')
const courseRouter = require('./routes/course')
const specialtyRouter = require('./routes/specialty')
const groupRouter = require('./routes/group')
const settingRouter = require('./routes/setting')
const subjectRouter = require('./routes/subject')
const themeRouter = require('./routes/theme')

const app = express();

//-------------------------------------------
app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/course', courseRouter)
app.use('/api/specialty', specialtyRouter)
app.use('/api/group', groupRouter)
app.use('/api/setting', settingRouter)
app.use('/api/subject', subjectRouter)
app.use('/api/theme', themeRouter)

//if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/dist/client'))

  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'client', 'index.html'))
  })
//}

module.exports = app