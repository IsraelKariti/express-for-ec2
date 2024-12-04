import express from 'express';
import cors from 'cors';
import { Computer, sequelize } from './squelized.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res)=>{    
    
    const message = await Computer.create(req.body);
    res.status(200).send('success');
});

app.get('/', async (req, res)=>{
    const computers = await Computer.findAll();
    res.status(200).send(computers);
});

(async ()=>{
    await sequelize.sync();
    app.listen(4000, ()=>{
        console.log('server is linstening no port 4000');
    });
})()
