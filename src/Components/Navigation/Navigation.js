import React from "react";
import s from './Navigation.module.css'




function Navigation() {
    return (
      <nav className={s.bloc}>
        <ul className={s.navigation}>
            <li>
                 <a href="#skils" className={s.link}> Skills </a>
            </li>
            <li>
            <a href="#portfolio" className={s.link}> Portfolio </a>
            </li>
            <li>
            <a href="#video" className={s.link}>Video</a>
            </li>
            <li>
            <a href="#price" className={s.link}>Price</a>
            </li>
            <li>
            <a href="#contacts" className={s.link}>Contacts</a>
            </li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;