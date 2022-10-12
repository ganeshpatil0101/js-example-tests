const express = require('express');

const app = express();
const MAX_LIMIT = 10;

function getFormattedDate() {
    const d = new Date();
    return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
app.get('/event-stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');

    res.flushHeaders();
    const sec = (req.query && req.query.sec) ? req.query.sec : 5
    const timezone = (req.query && req.query.city) ? req.query.city : 'Asia/Calcutta';
    let count = 0;
    process.env.TZ = timezone;
    console.log('Request Param -> ', timezone, ' seconds -> ', sec);
    let interval = setInterval(() => {
        count++;
        if(count >= MAX_LIMIT) {
            console.log('Interval Reached Max Limit Closing the Connection'); 
            clearInterval(interval);
            res.end();
            return;
        }
        const obj = {
            id: count,
            dateTime: getFormattedDate()
        };
        const time = new Date().getTime();
        res.write(`id: ${time}_${count}\n`);
        res.write(`event: UPDATE\n`);
        res.write(`data: ${JSON.stringify(obj)}\n\n`);
    }, sec * 1000);
    
    req.on('open', (event) => {
        console.log('connection open ', event);
    });

    res.on('close', () => {
        console.log('closed connection');
        clearInterval(interval);
        res.end();
    });
});
app.get('/apitest', (req, res) => {
    res.setHeader('Access-control-Allow-Origin', '*');
    res.send({data:'Task is queued for processing'});
});
app.get('/esource',(req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');

    res.flushHeaders();
    let timer = setTimeout(() => {
        const obj = {
            id: 1,
            msg: 'Large Data Successfully Completed !!!'
        };
        res.write(`data: ${JSON.stringify(obj)}\n\n`);
        res.end();
    }, 3000);

    res.on('close', () => {
        console.log('closed connection');
        clearTimeout(timer);
        res.end();
    });
});

app.listen(3000, () => { 
    console.log('listening on port 3000');
});
