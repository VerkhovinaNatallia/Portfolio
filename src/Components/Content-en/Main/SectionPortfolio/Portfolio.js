
import React, { useState } from "react";
import Menu from "./Menu";
import style from './Portfolio.module.css'



export const Portfolio = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [photo, setPhoto] = useState(Menu.filter((number) => number.category==='winter'));
    const handleButtonClick = (buttonId) => {
      setActiveButton(buttonId);
      if(buttonId===1){
        setPhoto(Menu.filter((number) => number.category==='winter'));
    }
    else if(buttonId===2){
        setPhoto(Menu.filter((number) => number.category==='spring'));
    }
    else if(buttonId===3){
        setPhoto(Menu.filter((number) => number.category==='sumer'));
    }
    else{
        setPhoto(Menu.filter((number) => number.category==='autumn'));
    }
      
    };


 



  

    return (
        <section id="portfolio" className={style.portfolio}>
            <div className={style.blockTitle}>
                <div/>
                <h2 className={style.title}>Portfolio</h2>
                <div/>
            </div>
            
            <div className={style.blocBtn}>
                <button className={`${activeButton === 1 ? style.active : ''}`} onClick={() => handleButtonClick(1)} >Winter</button>
                <button className={`${activeButton === 2 ? style.active : ''}`} onClick={() => handleButtonClick(2)}>Spring</button>
                <button className={`${activeButton === 3 ? style.active : ''}`} onClick={() => handleButtonClick(3)}>Summer</button>
                <button className={`${activeButton === 4 ? style.active : ''}`} onClick={() => handleButtonClick(4)}>Autumn</button>
            </div>
            <div className={style.portfolioBlock}>

                {photo.map((elem)=>{
                        const {id, src,alt}=elem;
                            return(
                                 <>
                        <img src={src} alt={alt} key={id}/>
                                 </>
                            )
                
                    }
                )
                }
            </div>

        </section>
    )
}





