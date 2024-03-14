import React from 'react'
import style from './Price.module.css'


export const Price =()=>{
    const priceItem = priceItems.map((item) =>
    <div className={style.priceItem}>
        <h3>{item.name}</h3>
        <p>{item.price} </p>
        <p>{item.location} </p>
        <p> {item.phcolor}</p>
        <p>{item.phretouch} </p>
        <p>{item.readiness}</p>
        <p> {item.services}</p>
        <a href='#contacts'>Order shooting</a>
    </div>
)

    return(
        <section id='price' className={style.price}>
            <div className={style.blockTitle}>
                    <div/>
                    <h2 className={style.title}>Price</h2>
                    <div/>
            </div>
            <div className={style.priceBlock}> {priceItem}</div>
        </section>
    )
}


const priceItems =[
    {
        name: 'Standard',
        price:'500 $' ,
        location:'One location' ,
        phcolor: '120 photos in color',
        phretouch:'12 photos in retouch' ,
        readiness: 'Readiness 2-3 weeks',
        services: 'Make up, visage'
            
    },
    {
        name:'Premium' ,
        price: '700 $',
        location:'One or two locations' ,
        phcolor: '200 photos in color',
        phretouch:'20 photos in retouch',
        readiness:'Readiness 1-2 weeks',
        services: 'Make up, visage'
            
    },
    {
        name:'Gold' ,
        price:'1000 $',
        location: 'Three locations or more',
        phcolor: '300 photos in color',
        phretouch: '50 photos in retouch',
        readiness:'Readiness 1 week' ,
        services: 'Make up, visage, hairstyle'
            
    }
]

