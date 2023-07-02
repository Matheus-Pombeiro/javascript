// ---------- Comandos indicados na seção 'Getting Started' do pacote ----------

const express = require('express');
const app = express();
const port = 3001;       // Troquei a porta para '3001' visto que a porta '3000' será usada no front-end

app.get('/', (req, res) => {
    res.send('Olá... Bem-vindo(a)!');
});

app.get('/cap12', (req, res) => {
    res.send('<h2>Capítulo 12: Introdução ao Express</h2>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});