const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log("it's alive: ${PORT}")
);


app.get('/book', (req, res) => { 
    res.status(200).send ({
        book:'book sample',
        type: 'novel'
    })
});


app.post('/book/:id', (req, res) => {
    const {id} = req.params;
    const {book} = req.body;

    if (!book){
        res.status(418).send({ message:'Need to type book here!'})
    }

    res.send({
        book: 'book sample with your ${book} and ID of ${id}',
    })
});