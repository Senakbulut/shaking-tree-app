import React, {useState, useEffect} from 'react'
import ShakeButton from '../ShakeButton/ShakeButton'
import './Tree.css'

function Tree(props) {

    const [shaking, setshake] = useState(false)
 

    const ShakeTree = () =>{
        setshake(true);
        setTimeout(()=>setshake(false), 3000);
        setTimeout(() => {
            props.fall()}, 3000);
        
    }
    
    return (
        <div>
            <div className="containerTree">
                    <img src="../../../public/images/tree.png" alt="" className={`treeImg ${shaking ? 'shake' : null }`}  />
            </div>
           
              <ShakeButton shake ={ShakeTree}/>
        </div>
    )
}

export default Tree
