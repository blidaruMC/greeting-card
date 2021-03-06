import React from "react";



export function MainCard({selectedImage, mainTextSet, signText, textSizeProp, color, quote}) {
    console.log(color)

    return (

        <div className='mainCard'>

            <h2 className='titleCard'>
                Greeting Card App
            </h2>
            <div className='cardImg'>
                <img src={selectedImage} alt="Selected" className='selected'/>
            </div>
            <div className='customText'>
                <div style={{color}} className='mainText'>
                    <p style={{fontSize: textSizeProp}}>{mainTextSet}</p>
                </div>
                <div className='signatureText'>
                    <p dangerouslySetInnerHTML={{__html: quote}}/>
                </div>

            </div>
        </div>
    )
}