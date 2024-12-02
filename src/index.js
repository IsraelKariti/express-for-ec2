import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    console.log('express got a request!');
    
    res.status(200).send('success');
});

app.listen(4000, ()=>{
    console.log('server is linstening no port 4000');
});