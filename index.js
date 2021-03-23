const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());


const users = ['abul', 'kabul', 'babul', 'tabul', 'jabul', 'anamul'];

// const rootCall = (req, res) => {
//     res.send('thank you very much');
// }

app.get('/', (req, res) => {
    const product = {
        fruit: 'banana',
        price: 29
    }
    res.send(product.fruit);
});

// app.get('/fruit/banana', (req, res) => {
//     res.send({fruit: 'banana', quantity: 1000, price: 10000});
// })

app.get('/users/:id', (req, res) => {
    const userID = req.params.id;
    const name = users[userID];
    res.send({userID,name});
})

//post

app.post('/addUser', (req, res) => {
    // console.log('data received', req.body);

    //save to database

    const user = req.body;
    user.id = 55
    res.send(user);
})

app.listen(3000, () => console.log('Listening to port 3000'));