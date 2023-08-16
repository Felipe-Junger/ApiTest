const express = require('express');
const path = require('path');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view egine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/', ( req, res ) => {
   res.render('index', {});
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));