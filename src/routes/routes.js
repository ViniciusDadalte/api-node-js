const express = require('express'); 
const router = express.Router(); 

const UsuariosController = require('../controllers/usuarios');
const CategoriaController = require('../controllers/categoria');  

router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.get('/usuarios', CategoriaController.listarCategoria); 
router.post('/usuarios', CategoriaController.cadastrarCategoria); 
router.patch('/usuarios', CategoriaController.editarCategoria); 
router.delete('/usuarios', CategoriaController.apagarCategoria); 

module.exports = router;