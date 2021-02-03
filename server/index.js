const express = require('express')
const mb = require('./controller.js')

const app = express()

app.use(express.json())



app.get('/api/mechs', mb.displayMechs)
app.post('/api/mechs', mb.createMech)
app.put('/api/mechs/:id', mb.venerate)
app.delete('/api/mechs/:id', mb.reclamator)


const port = 4545

app.listen(port, () => console.log(`Server is running on port ${port}.`))