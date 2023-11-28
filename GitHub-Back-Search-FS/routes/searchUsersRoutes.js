const express = require('express')
const router = express.Router()
const searchUserController = require('../controllers/searchUserController')
const authenticateUser = require('../Auth/authenticateUser')

// Rutas protegidas
router.use(authenticateUser)

// Rutas relacionadas a los usuarios buscados:
router.post('/', searchUserController.searchAndSaveResults)
router.get('/', searchUserController.getAllSearchUsers)
router.get('/:id', searchUserController.getSearchUserById)
router.patch('/:id', searchUserController.updateSearchUserById)
router.delete('/:id', searchUserController.deleteSearchUserById)

module.exports = router
