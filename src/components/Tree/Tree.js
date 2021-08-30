import React, {useState} from 'react'
import ShakeButton from '../ShakeButton/ShakeButton'
import './Tree.css'

function Tree(props) {

    const [shaking, setshake] = useState(false)
 
    const ShakeTree = () =>{ //Synchronization was achieved by specifying the tree shaking that will last 3 seconds with the setTimeout function and then calling the apple falling animation with props.
        setshake(true);
        setTimeout(()=>setshake(false), 3000);
        setTimeout(() => {
            props.fall()}, 3000);  
    }   
    return (
        <div>
            <div className="containerTree">
                    <img sr{c="../../../public/images/tree.png" alt="" className={`treeImg ${shaking ? 'shake' : null }`}  />
            </div>
              <ShakeButton shake ={ShakeTree}/>
              {/*prepared function sent to button*/}
        </div>
    )
}

export default Tree
