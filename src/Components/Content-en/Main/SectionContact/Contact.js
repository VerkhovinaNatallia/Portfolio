import React from "react";
import './contacts.jpg'
import style from './Contacts.module.css';

export const Contact = ( )=>{
    return(
        <section id="contacts" className={style.contact}>
            <form>
                <h2 className={style.title}>Contact me</h2>
                <input value='E-mail'/>
                <input value='Phone'/>
                <input value='Message'/>
                <button>Send message</button>
            </form>
        </section>
    )
}
