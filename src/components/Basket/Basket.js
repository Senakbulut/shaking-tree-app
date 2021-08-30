import React, { useState } from 'react'
import './Basket.css'
import Apple from '../Apple/Apple'
function Basket() {
    const [basketApple, setBasketApple] = useState(false);

    const visibleApple = ()=>{ //The function prepared for the apples in the basket to fall 1 second after the apples fall
       
        setBasketApple(true);
        setTimeout(()=>setBasketApple(false), 6000);
    }
    return (
        <div>
        /*Function is sent to Apple component so it can be used with props*/
            <Apple visible={visibleApple}/> 
            <div className="containerBasket">
                <img src="../../../public/images/basket.png" alt="" className="basketImg" />
                <img src="../../../public/images/apple.png" alt=""  className={`basketapple1 ${basketApple ? 'vBasketapple' : null }`}/>
                <img src="../../../public/images/apple.png" alt="" className={`basketapple2 ${basketApple ? 'vBasketapple' : null }`} />
                <img src="../../../public/images/apple.png" alt="" className={`basketapple3 ${basketApple ? 'vBasketapple' : null }`} />
            </div>
        </div>
    )
}

export default Basket
