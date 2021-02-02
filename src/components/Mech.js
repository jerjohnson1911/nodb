import React from 'react'

const Mech = props => {
    return <div className='mech'>
        <div>Mech: {props.mech.frame}</div>
        <div>Honorific: {props.mech.honorific}</div>
        <div>Weight: {props.mech.size}</div>
        <div>Engine: {props.mech.engine}</div>
        {/* <div>Torso: {props.mech.weaponSystems.torso[0]}</div>
        <div>Torso: {props.mech.weaponSystems.torso[1]}</div>
        <div>Left Arm a: {props.mech.weaponSystems.leftArm[0]}</div>
        <div>Left Arm b: {props.mech.weaponSystems.leftArm[1]}</div>
        <div>Right Arm a: {props.mech.weaponSystems.rightArm[0]}</div>
        <div>Right Arm b: {props.mech.weaponSystems.rightArm[1]}</div> */}
        

    </div>
}

export default Mech