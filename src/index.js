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

});

(async ()=>{
    await sequelize.sync();
    app.listen(4000, ()=>{
        console.log('server is linstening no port 4000');
    });
})()
