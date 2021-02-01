const mechList = []

let id = 1

module.exports = {
    getMechList: (req, res) => {
        res.status(200).send(mechList)
    },

    addMech: (req, res) => {
        // need to deconstruct something here
        const {} = req.body
        //not sure this will work

        const newMech = {id, la, ra, torso}
        mechList.push(newMech)
        id++
        res.status(200).send(mechList)
    },

    editMech: (req, res) => {
        const index = mechList.findIndex( mech => mech.id === +req.params.id)

        res.status(200).send(mechList)
    },

    deleteMech: (req, res) => {
        const index = mechList.findIndex(  mech => mech.id === +req.params.id)
        mechList.splice(index, 1)
        res.status(200).send(mechList)
    }
}