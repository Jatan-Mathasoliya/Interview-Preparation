import express from 'express';
import rateLimiterMiddleware from './middleware.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(rateLimiterMiddleware)

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

app.get('/', (req, res) => {
    res.status(202).send("get request called.");
})