import React, { useState } from 'react'
import './Apple.css'
import Tree from '../Tree/Tree'

function Apple(props) {

    const [fallApple1, setFallApple1] = useState(false) //controllable variables defined with useState for apple animations
    const [fallApple2, setFallApple2] = useState(false)
    const [fallApple3, setFallApple3] = useState(false)

    const fallApples = () =>{ //apples fall animation function
         setFallApple1(true); setFallApple2(true); setFallApple3(true);
         setTimeout(()=>setFallApple1(false),5000); //animations defined at different seconds from each other have been set
         setTimeout(()=>setFallApple2(false),6000);
         setTimeout(()=>setFallApple3(false),7000);
         setTimeout(()=>{ //It is stated that after the apples fall, they access the function that provides the visibility of the apples in the basket with props.
             props.visible()}, 4000);
    }

    return (
        <div>
           <Tree fall ={fallApples}/>
{/*It is stated that if the variable that provides control with useState is true, the class defined in the sass file should be added.*/}
            <div className="containerApple">
                    <img src="../../../public/images/apple.png" alt="" className={`appleImg1 `}/>
                    <img src="../../../public/images/apple.png" alt="" className={`appleImg2 `} />
                    <img src="../../../public/images/apple.png" alt="" className={`appleImg3 ${fallApple1 ? 'fallAppl1' : null }`} /> 
                    <img src="../../../public/images/apple.png" alt="" className={`appleImg4 ${fallApple2 ? 'fallAppl2' : null }`} />
                    <img src="../../../public/images/apple.png" alt="" className={`appleImg5 `} />
                    <img src="../../../public/images/apple.png" alt="" className={`appleImg6 `} />
                    <img src="../../../public/images/apple.png" alt="" className={`appleImg7 ${fallApple3 ? 'fallAppl3' : null }`} />
            </div>
       
        </div>
    )
}

export default Apple
