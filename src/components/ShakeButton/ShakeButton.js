import React from 'react'
import './ShakeButton.css'

function ShakeButton(props) {

    return (
        <div>
            <div className="containerButton" >
                <div className="wrapperButton" onClick={props.shake} >
                <a href="#" className="buttonCircle">Shake</a>
                </div>
            </div>
        </div>
    )
}

export default ShakeButton
