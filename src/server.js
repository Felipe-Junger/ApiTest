const express = require('express');
const path = require('path');

const app = express();

app.get('/message/:id', ( request, response ) => {
   
   response.send(`Id da mensagem: ${request.params.id}`);
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));