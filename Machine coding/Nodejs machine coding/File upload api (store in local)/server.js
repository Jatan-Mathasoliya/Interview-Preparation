import express from 'express';
import multer from 'multer';


const app = express();
const PORT = 5005;

app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res)=>{
    if(!req.file) {
        return res.status(400).json({error:'No file upload'})
    }

    res.json({message : 'File upload successfully'})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})