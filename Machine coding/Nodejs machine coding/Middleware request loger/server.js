import express, { json } from 'express';
import reqLoger from './middleware.js';

const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server is running in ${PORT}`);
})


app.get('/get', (req, res)=>{
    try{
        const info = req.loggedData;
        
        res.status(202).json(info);
        console.log(req);
    }catch(err){
        res.status(500).send("Internal server error")
        console.error(err)
    }
})


app.use(reqLoger);

app.post('/post', (req, res)=>{
    try{
        const info = req.loggedData;
    
        res.status(202).json(info);
        console.log(req);
    }catch(err){
        res.status(500).send("Internal server error")
        console.error(err)
    }
})