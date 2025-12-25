import express from "express";
import fs from 'fs';

const app = express();
const PORT = 3003;

app.use(express.json());


app.get('/search', (req, res) => {
    try {
        const searchTerm = req.query.term;

        console.log(searchTerm)

        if (!searchTerm) {
            return res.status(400).send('Search term is required.');
        }
        const regex = RegExp(searchTerm, 'i');

        const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

        console.log(data)

        const serachedData = data.filter(product => {
            return regex.test(product.name);
        })

        res.status(200).json(serachedData);
    } catch (err) {
        console.log(err);
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})