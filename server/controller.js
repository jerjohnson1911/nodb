const mechs = [
    {
        id: 0,
        frame: 'Timberwolf',
        honorific: '',
        size: '75',
        engine:  '375',
        weaponSystems: {
                leftArm: ['large las'],
                rightArm: ['large las'],
                torso: ['2x LRM 20']
            }
        
    },
    {
        id: 1,
        frame: 'Atlas',
        honorific: '',
        size: '100',
        engine: '300',
        weaponSystems: {
            leftArm: ['med pulse las'],
            rightArm: ['med pulse las'],
            torso: ['AC 20 ', ' SRM 6']
        }
        
    }
]

let id = 2

module.exports = {
    displayMechs: (req, res) => {
        res.status(200).send(mechs)
    },

    createMech: (req, res) => {
        // need to deconstruct something here
        const {frame, honorific, size, engine, weaponSystems} = req.body
        //not sure this will work
console.log(req.body)
        const newMech = {id, frame, honorific, size, engine, weaponSystems}
        mechs.push(newMech)
        id++
        res.status(200).send(mechs)

    },

    venerate: (req, res) => {
        const {honorific} = req.body
        
        const index = mechs.findIndex( mech => mech.id === +req.params.id)
        mechs[index].honorific = honorific
        res.status(200).send(mechs)
    },

    reclamator: (req, res) => {
        const index = mechs.findIndex( mech => mech.id === +req.params.id)
        mechs.splice(index, 1)
        res.status(200).send(mechs)
    }
}