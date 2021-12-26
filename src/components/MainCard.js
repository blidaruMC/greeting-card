import React, {useState} from "react";
import Images from "../Images";


export function MainCard({selectedimage}) {


    return (

        <div className='mainCard'>

            <h2 className='titleCard'>
                Greeting Card App
            </h2>
            <div className='cardImg'>
                <img src={selectedimage} alt="Selected" className='selected'/>
            </div>
            <div className='customText'>
                <div className='mainText'>
                    <p>Main Text </p>
                </div>
                <div className='signatureText'>
                    <p>Signature text dwadwada sadwa</p>
                </div>
            </div>
        </div>
    )
}