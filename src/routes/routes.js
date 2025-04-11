const express = require('express'); 
const router = express.Router(); 

const UsuariosController = require('../controllers/usuarios');
const CategoriaController = require('../controllers/categoria');  

router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.get('/categoria', CategoriaController.listarCategoria); 
router.post('/categoria', CategoriaController.cadastrarCategoria); 
router.patch('/categoria', CategoriaController.editarCategoria); 
router.delete('/categoria', CategoriaController.apagarCategoria); 

module.exports = router;