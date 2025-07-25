// const express = require('express');
import express from 'express';
import cors from 'cors';
// import * as fs from 'node:fs/promises';
import fs from 'fs';
// import jsonData from './data.json';
// const data = JSON.parse(jsonData);

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const data = loadJSON('./data.json');
// const data = require('./data.json');

const app = express()

app.use(cors());

const port = 3000

app.get('/', (req, res) => {
    console.log(req.query)
    const type = req && req.query.type;
    const exclusive = req && req.query.badge;

    if (type === 'even_id') {
        res.send(data.topbk.filter(({id}) => id % 2 === 0))
    } else if (type === 'odd_id') {
        res.send(data.topbk.filter(({id}) => id % 2 !== 0))
    } else if (exclusive === 'exclusive') {
        res.send(data.topbk.filter(({ badge }) => badge === 'exclusive'))
    } else {
        res.send(data.topbk)
    }

    console.log(data)
 
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})