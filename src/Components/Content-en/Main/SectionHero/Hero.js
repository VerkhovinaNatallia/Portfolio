import React from "react";
import style from './Hero.module.css'






export const Hero = () => {
    return (
        <section className={style.hero}>
            <h1 className={style.title}>Alexa Rise</h1>
            <p className={style.text}>
                Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise
            </p>
            <a href='#contacts'>
                <button  className={style.heroBtn}>Hire me</button>
            </a>
        </section> 
    )
}


