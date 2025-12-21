import express from 'express';

const app = express();
const PORT = 3000;

const data = [
    {
        id: 1,
        name: "jjm",
        age: 18
    },
    {
        id: 2,
        name: "js",
        age: 20
    },
    {
        id: 3,
        name: "kk",
        age: 19
    }
];

app.use(express.json());

app.listen(PORT, () => {
    console.log(`app is runnig in ${PORT}`)
})

app.get('/getData', async (req, res) => {
    try {
        res.status(202).send(data);
    } catch (err) {
        res.status(500).send("Internal server error.")
    }
})

app.post('/addData', async (req, res) => {
    const dataToAdd = req.body;
    try {
        console.log("Data recived in Backend :", dataToAdd);
        data.push(dataToAdd);
        res.status(202).json(data)
        console.log(data)
    } catch (error) {
        res.status(500).send("Internal server error")
    }
})

app.put('/updateData/:id', async (req, res) => {
    const {id} = req.params;
    const update = req.body;

    try {
        const dataToUpdate = data[id - 1];
        console.log("data to update : ", dataToUpdate);
        console.log(update);

        data[id - 1] = update;

        res.status(202).json({message:"Data is updated"});
    } catch (error) {
        res.status(500).send("Internal server error : ", error)
        console.error(error)
    }
})

app.delete('/deleteData/:id', async (req, res) => {
    const {id} = req.params;
    try {
        data.splice(id - 1, 1);
        res.status(202).json({message: "Data is deleted"});
    } catch (error) {
        res.status(500).send("Internal server error : ", error)
    }
})