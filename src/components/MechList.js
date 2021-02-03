import React, {Component} from 'react'
import axios from 'axios'
import MechBay from './MechBay'
import Mech from './Mech'

class MechList extends Component {
    constructor() {
        super()

        this.state = {
            mechs: [],
            input: ''
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
            // console.log(res.data)
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

    venerate = id => {
        axios.put(`/api/mechs/${id}`, {honorific: this.state.input})
        .then(res => {
            this.setState({
                mechs: res.data
            })
        }).catch(err => console.log(err))
    }

    handleVenerate = (e) => {
        console.log(e.target.value)
        this.setState({
            input: e.target.value
        })
    }



    reclamator = id => {
        axios.delete(`/api/mechs/${id}`)
        .then( res => {
            this.setState({
                mechs: res.data
            })
        }).catch(err => console.log(err))
    }

    render() {
        const mappedMechs = this.state.mechs.map( mech => {
            return <Mech
            key={mech.id}
            mech={mech} 
            reclamator={this.reclamator}
            venerate={this.venerate}
            handleVenerate={this.handleVenerate}
            />

        })

        return <div className='mechBay'>
            <MechBay createMech={this.createMech}/>
            {mappedMechs}
        </div>
    }
}

export default MechList