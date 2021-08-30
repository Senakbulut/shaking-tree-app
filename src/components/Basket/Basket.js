import React, { useState } from 'react'
import './Basket.css'
import Apple from '../Apple/Apple'
function Basket() {
    const [basketApple, setBasketApple] = useState(false);

    const visibleApple = ()=>{
       
        setBasketApple(true);
        setTimeout(()=>setBasketApple(false), 6000);
    }
    return (
        <div>
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
