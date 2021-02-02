const mechs = [
    {
        id: 0,
        frame: 'Timberwolf',
        honorific: '',
        size: 75,
        weaponSystems: {
                leftArm: ['large las', 'medium las'],
                rightArm: ['large las', 'medium las'],
                torso: ['LRM 20', 'LRM 20']
            },
        engine:  375
    },
    {
        id: 1,
        frame: 'Atlas',
        honorific: '',
        size: 100,
        weaponSystems: {
            leftArm: ['med pulse las'],
            rightArm: ['med pulse las'],
            torso: ['AC 120', 'SRM 6']
        },
        engine: 300
    }
]

let id = 2

module.exports = {
    displayMechs: (req, res) => {
        res.status(200).send(mechs)
    },

    createMech: (req, res) => {
        // need to deconstruct something here
        const {frame, honorific, size, weaponSystems, engine} = req.body
        //not sure this will work

        const newMech = {id, frame, honorific, size, weaponSystems, engine}
        mechs.push(newMech)
        id++
        res.status(200).send(mechs)
    },

    // editMech: (req, res) => {
    //     const index = mechList.findIndex( mech => mech.id === +req.params.id)

    //     res.status(200).send(mechs)
    // },

    // deleteMech: (req, res) => {
    //     const index = mechList.findIndex(  mech => mech.id === +req.params.id)
    //     mechList.splice(index, 1)
    //     res.status(200).send(mechs)
    // }
}