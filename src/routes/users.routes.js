const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const userRoutes = Router();

function myMiddleware () {
    console.log('Você passou pelo middleware!');
};


const usersController = new UsersController();

userRoutes.post('/', myMiddleware, usersController.create);

module.exports = userRoutes;