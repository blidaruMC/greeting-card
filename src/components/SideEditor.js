import React, {useState} from "react";
import {CompactPicker} from 'react-color';
import {MainCard} from "./MainCard";

export function SideEditor({mainTextIs, sigText, textSizePropChange, newQuote}) {


    return (
        <div className='editorSettings'>
            <h2>Settings</h2>
            <h4 >Your text:</h4>
            <input onChange={mainTextIs}
                   type="text"
                   className='insertMainText'
                   placeholder='Write text'/>


            {/*<h4>Signature:</h4>*/}
            {/*<input onChange={sigText}*/}
            {/*       type="text"*/}
            {/*       className='insertSignature'*/}
            {/*       placeholder='Your signature'/>*/}
            <h4>Add random advice</h4>
            <button onClick={newQuote}>Random advice</button>

            <h4>Text size</h4>
            <input onChange={textSizePropChange}
                   type="range"
                   className='insertSize'
                   min='16'
                   max='48'/>
            <hr/>
            <h4>Text Color</h4>


        </div>
    )
}