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
        }).catch(err => console.log(err))
    }



    render() {
        const mappedMechs = this.state.mechs.map( mech => {
            return <Mech
            key={mech.id}
            mech={mech} />

        })

        return <div className='mechBay'>
            {mappedMechs}
        </div>
    }
}

export default MechList