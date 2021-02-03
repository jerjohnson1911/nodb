import React from 'react'

const Mech = props => {
    return <div className='mech'>
        <div className='desig'>
            Mech: {props.mech.frame}
            <br/>
            Honorific: {props.mech.honorific}
            <br/>
            Weight: {props.mech.size}
        </div>
        {/* <div>Honorific: {props.mech.honorific}</div> */}
        {/* <div>Weight: {props.mech.size}</div> */}
        {/* <div>Engine: {props.mech.engine}</div> */}
        <div className='cPit'>Cockpit</div>
         
        <div className='torso'>
            Engine: {props.mech.engine}
            <br/>
            Torso: {props.mech.weaponSystems.torso}
        
        </div>
        
        <div className='leftArm'>LA: {props.mech.weaponSystems.leftArm}</div>
      
        <div className='rightArm'>RA: {props.mech.weaponSystems.rightArm}</div>
        
        <div className='leftLeg'>LL</div>
        <div className='rightLeg'>RL</div>
        
        <input type='text'
            name='venerate'
            placeholder='Bestow honors.'
            onChange={e => props.handleVenerate(e)}
            className='bestowHonors'
            />

        <button 
            onClick={() => props.venerate(props.mech.id)}
            className='ven-btn'>

            Venerate</button>
           
             
        <button 
         onClick={() => props.reclamator(props.mech.id)}
         className='rec-btn'>
           <p className='rec-text'>send for reclamation</p></button>
    </div>
}

export default Mech