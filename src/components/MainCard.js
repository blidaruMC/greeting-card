import React, {useState} from "react";
import Images from "../Images";


export function MainCard({selectedImage, mainTextSet, signText}) {


    return (

        <div className='mainCard'>

            <h2 className='titleCard'>
                Greeting Card App
            </h2>
            <div className='cardImg'>
                <img src={selectedImage} alt="Selected" className='selected'/>
            </div>
            <div className='customText'>
                <div className='mainText'>
                    <p>{mainTextSet}</p>
                </div>
                <div className='signatureText'>
                    <p>{signText}</p>
                </div>
            </div>
        </div>
    )
}