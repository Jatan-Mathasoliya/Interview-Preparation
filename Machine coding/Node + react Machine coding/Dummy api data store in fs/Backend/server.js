import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
    
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/data', (req, res)=>{
    const data = req.body;
    console.log("Data received at backend : ", data);
    fs.writeFileSync('data.json', JSON.stringify(data, null, 4));

    // res.json(data)
    res.status(202).json({message:"Data is stored in DB"})
})