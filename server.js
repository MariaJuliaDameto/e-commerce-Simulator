const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulação de banco de dados 
const products = [
    { id: 1, name: 'Produto 1', price: 99.99, description: 'Descrição do Produto 1' },
    { id: 2, name: 'Produto 2', price: 149.99, description: 'Descrição do Produto 2' }
];

// Rota para obter todos os produtos
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Rota para obter detalhes de um produto específico
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(product);
});

// Rota de autenticação básica
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Simulação de autenticação
    if (username === 'usuario' && password === 'senha') {
        return res.json({ message: 'Login bem-sucedido' });
    }
    res.status(401).json({ message: 'Credenciais inválidas' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
