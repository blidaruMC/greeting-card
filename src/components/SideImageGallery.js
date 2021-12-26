import React, {useState} from "react";
import Images from "../Images";


export function SideImageGallery({setImage}) {


    return(
        <div className='imageGallery'>
            <div className='imgContainer'>
                {Images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        onClick={() => setImage(img)}
                    />
                ))}
            </div>

        </div>
    )
}