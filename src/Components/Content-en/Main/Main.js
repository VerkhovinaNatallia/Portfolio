import React from "react";


import { Hero } from "./SectionHero/Hero";
import { Skils } from "./SectionSkils/Skils";
import { Portfolio } from "./SectionPortfolio/Portfolio";
import { Video } from "./SectionVideo/Video";
import { Price } from "./SectionPrice/Price";
import { Contact } from "./SectionContact/Contact";

export const Main = ( )=>{
    return(
        <>
            <Hero/>
            <Skils />
            <Portfolio/>
            <Video/>
            <Price/>
            <Contact/>
        </>
    )
}