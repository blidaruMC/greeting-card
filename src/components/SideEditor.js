import React from "react";

export function SideEditor() {

    return (
        <div className='sideEditor'>
            Editor
            <h4>Your text:</h4>
            <input type="text" className='insertMainText' placeholder='Write text'/>
            <h4>Signature:</h4>
            <input type="text" className='insertSignature' placeholder='Your signature'/>
            <hr/>
            <h4>Text size</h4>
            <input type="range" className='insertSize' min='16' max='100'/>
            <h4>Text Color</h4>

        </div>
    )
}