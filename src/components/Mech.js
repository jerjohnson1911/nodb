import React from 'react'

const Mech = props => {
    return <div className='mech'>
        <div>Mech: {props.mech.frame}</div>
        <div>Honorific: {props.mech.honorific}</div>
        <div>Weight: {props.mech.size}</div>
        <div>Engine: {props.mech.engine}</div>
        <div>Torso: {props.mech.weaponSystems.torso}</div>
        {/* <div>Torso: {props.mech.weaponSystems.torso[1]}</div> */}
        <div>Left Arm: {props.mech.weaponSystems.leftArm}</div>
        {/* <div>Left Arm b: {props.mech.weaponSystems.leftArm[1]}</div> */}
        <div>Right Arm: {props.mech.weaponSystems.rightArm}</div>
        {/* <div>Right Arm b: {props.mech.weaponSystems.rightArm[1]}</div> */}
        
         <button onClick={() => props.reclamator(props.mech.id)}>Send for reclamation.</button>
    </div>
}

export default Mech