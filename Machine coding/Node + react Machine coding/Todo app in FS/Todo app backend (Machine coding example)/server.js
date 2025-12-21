import express from 'express';
import fs from 'fs';
import cors from 'cors';
const app = express();

app.use(cors({
  origin: 'http://localhost:5174',
  methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
}));

app.use(express.json());

app.get('/todos', (req, res) => {
    try {
        const data = fs.readFileSync('todos.json', 'utf8');
        const todos = JSON.parse(data);
        res.json(todos);

    } catch (err) {
        res.status(500).send('Error reading todos');
    }
});

app.post('/todos', (req, res) => {
    const newTodo = req.body;
    try {
        const data = fs.readFileSync('todos.json', 'utf8');
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).send('Error saving todo');
    }   
});

app.put('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;
    try {
        const data = fs.readFileSync('todos.json', 'utf8');
        let todos = JSON.parse(data);
        todos = todos.map(todo => todo.id === todoId ? updatedTodo : todo);
        fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).send('Error updating todo');
    }
});

app.patch('/todos/update-status/:id', (req, res) => {
    const todoId = req.params.id;
    const { status } = req.body;
    try {
        const data = fs.readFileSync('todos.json', 'utf8');
        let todos = JSON.parse(data);
        todos = todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, status };
            }
            return todo;
        }
        );  
        fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
        res.status(200).json(todos.find(todo => todo.id === todoId));
    } catch (err) {
        res.status(500).send('Error updating todo status');
    }
});

app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    try{
        const data = fs.readFileSync('todos.json', 'utf8');
        let todos = JSON.parse(data);
        todos = todos.filter(todo => todo.id !== todoId);
        fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
        res.status(200).send('Todo deleted');
    }catch(err){
        res.status(500).send('Error deleting todo');
    }
}
);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
