const userRoutes = require('./userRoutes')
const searchUserRoutes = require('./searchUsersRoutes')
const searchReposRoutes = require('./searchReposRoutes')

module.exports = app => {
  app.use('/user', userRoutes)
  app.use('/searchuser', searchUserRoutes)
  app.use('/searchrepos', searchReposRoutes)
}
