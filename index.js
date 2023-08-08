const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const chefData = require('./data/chefData.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chefData', (req, res) => {
    res.send(chefData)
})
app.get('/chefData/:id', (req, res) => {
    const id = req.params.id
    const selectedChef = chefData.find(c => c.id == id)
    res.send(selectedChef)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})