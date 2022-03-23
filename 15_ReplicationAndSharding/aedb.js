const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT;
const DATA_DIR = process.env.DATA_DIR;

const app = express();
app.use(express.json());

app.post('/:key', (req, res) => {
    const {key} = req.params;
    console.log(`Storing data at key: ${key}`);
    const destinationFile = `${DATA_DIR}/${key}`;
    fs.writeFileSync(destinationFile, req.body.data);
    res.send();
})

app.get('/:key', (req, res) => {
    const {key} = req.params;
    console.log(`Retrieving data from key: ${key}`);
    const destinationFile = `${DATA_DIR}/${key}`;
    try {
        const data = fs.readFileSync(destinationFile);
        res.send(data);
    } catch (e) {
        res.send('null');
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
})