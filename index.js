const express = require('express');
const app = express();

// const rootCall = (req, res) => {
//     res.send('thank you very much');
// }

app.get('/', (req, res) => {
    res.send("I am node mamma");
});

app.listen(3000, () => console.log('Listening to port 3000'));