import React, {Component} from 'react'


class MechBay extends Component {
    constructor() {
        super()

        this.state = {
            frame: '',
            honorific: '',
            size: '',
            engine: '',
            weaponSystems: {
                leftArm: [],
                rightArm: [],
                torso: []
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
    }

    weaponChange = (e) => {
        this.setState({
            weaponSystems: {...this.state.weaponSystems, [e.target.name]: e.target.value}
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createMech(
            this.state.frame, 
            this.state.honorific, 
            this.state.size,
            this.state.engine,
            this.state.weaponSystems
            
            )
        this.setState({
            frame: '',
            honorific: '',
            size: '',
            engine: '',
            weaponSystems: {
                leftArm: [],
                rightArm: [],
                torso: []
            }
        })
    }

    
    render() {
        return <div className='createMech'>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                name='frame'
                onChange={e => this.handleChange(e)}
                value={this.state.frame}
                placeholder='Enter chassis'
                type='text' />
               
                <input
                name='honorific'
                onChange={e => this.handleChange(e)}
                value={this.state.honorific}
                placeholder='Enter name'
                type='text' />
              
                <input
                name='size'
                onChange={e => this.handleChange(e)}
                value={this.state.size}
                placeholder='Enter tonnage'
                type='text' />

                <input
                name='engine'
                onChange={e => this.handleChange(e)}
                value={this.state.engine}
                placeholder='Enter engine size'
                type='text' />
               
                <input
                name='torso'
                onChange={e => this.weaponChange(e)}
                value={this.state.weaponSystems.torso}
                placeholder='Enter torso weapons'
                type='text' />
              
                <input
                name='leftArm'
                onChange={e => this.weaponChange(e)}
                value={this.state.weaponSystems.leftArm}
                placeholder='Enter  left arm weapons'
                type='text' />
               
                <input
                name='rightArm'
                onChange={e => this.weaponChange(e)}
                value={this.state.weaponSystems.rightArm}
                placeholder='Enter right arm weapons'
                type='text' />
                
                              

                <button type='submit'>Enlist this Mech!</button>
            </form>


        </div>
    }
}


export default MechBay