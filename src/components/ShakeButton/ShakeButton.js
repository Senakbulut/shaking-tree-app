import React from 'react'
import './ShakeButton.css'

function ShakeButton(props) {

    return (
        <div>
        {/*By accessing the shake variable sent by the Tree component with props, the defined function is activated by clicking the button.*/}
            <div className="containerButton" >
                <div className="wrapperButton" onClick={props.shake} >
                <a href="#" className="buttonCircle">Shake</a>
                </div>
            </div>
        </div>
    )
}

export default ShakeButton
