const express = require('express')
const router = express.Router()
const searchReposController = require('../controllers/searchRepoController')
const authenticateUser = require('../Auth/authenticateUser')

// Rutas protegidas
router.use(authenticateUser)

// Rutas relacionadas a los repositorios buscados:
router.post('/', searchReposController.searchAndSaveResults)
router.get('/', searchReposController.getAllSearchRepositories)
router.get('/:id', searchReposController.getSearchRepositoryById)
router.patch('/:id', searchReposController.updateSearchRepositoryById)
router.delete('/:id', searchReposController.deleteSearchRepositoryById)

module.exports = router
