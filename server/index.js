const express = require('express')
// const mc = require('./controller.js')
const app = express()

app.use(express.json())



// app.get('/api.mechs', mc.showMechs)
// app.post('/api/mechs', mc.saveMech)
// app.put('/api/messages/:id', mc.editMech)
// app.delete('/api/mechs/:id', mc.deleteMech)


const port = 4545

app.listen(port, () => console.log(`Server is running on port ${port}.`))