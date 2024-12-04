import express from 'express';
import cors from 'cors';
import { Message, sequelize } from './squelized.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res)=>{
    console.log('express got a request!');
    const message = await Message.create(req.body);
    res.status(200).send('success');
});

(async ()=>{
    await sequelize.sync();
    app.listen(4000, ()=>{
        console.log('server is linstening no port 4000');
    });
})()
