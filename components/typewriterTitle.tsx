"use client"

import React from 'react';
import Typewriter from "typewriter-effect"


const TypewriterTitle = () => {
    return (
       <Typewriter options={{loop: true}} onInit={(typewriter) => {typewriter.typeString("Enter more information here").pauseFor(1000).deleteAll().typeString("More information here").start()}}/>
    );
};

export default TypewriterTitle;