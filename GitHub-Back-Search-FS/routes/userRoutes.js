const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const authenticateUser = require('../Auth/authenticateUser')

// Rutas relacionadas al usuario:

router.post('/login', authController.loginUser)

// Middleware de autenticación para las rutas protegidas
router.use(authenticateUser)
router.get('/logout', authController.logout)
router.get('/:username', authController.getUserProfile)

module.exports = router
