const express = require('express');
const path = require('path');

const app = express();

app.get('/message/:id/:user', ( request, response ) => {
   const { id, user } = request.params;

   response.send(`
      Mensagem ID: ${id}.
      Para o usuário:${user}.   
   `);
});

app.get('/users', ( request, response ) => {
   const { page, limit } = request.query;

   response.send(`Page ${page}.
                  Limits ${limit}
   `);
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));