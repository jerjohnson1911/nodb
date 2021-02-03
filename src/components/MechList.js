import React, {Component} from 'react'
import axios from 'axios'
import MechBay from './MechBay'
import Mech from './Mech'

class MechList extends Component {
    constructor() {
        super()

        this.state = {
            mechs: []
        }

    }

    componentDidMount(){
        this.displayMechs()
    }

    displayMechs = () => {
        axios.get('/api/mechs')
        .then(res =>{
            this.setState({
                mechs: res.data
            })
            console.log(res.data)
        }).catch(err => console.log(err))
    }


    createMech = (frame, honorific, size, engine, weaponSystems) => {
        axios.post('/api/mechs', {frame, honorific, size, engine, weaponSystems})
        .then(res =>{
            this.setState({
                mechs: res.data
            })
        }).catch( err => console.log(err))
    }


    render() {
        const mappedMechs = this.state.mechs.map( mech => {
            return <Mech
            key={mech.id}
            mech={mech} />

        })

        return <div className='mechBay'>
            <MechBay createMech={this.createMech}/>
            {mappedMechs}
        </div>
    }
}

export default MechList