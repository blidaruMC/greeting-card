import React, {useState} from "react";
import './App.scss';
import {SideImageGallery} from "./components/SideImageGallery";
import {MainCard} from "./components/MainCard";
import {SideEditor} from "./components/SideEditor";
import Images from "./Images";
import {CompactPicker} from 'react-color';
import {Navbar} from "./navbar/Navbar";

function App() {
    const [selectedImg, setSelectedImg] = useState(Images[0]);
    const [mainTextValue, setMainTextValue] = useState('');
    const [signatureTextValue, setSignatureTextValue] = useState('');
    const [textSize, setTextSize] = useState(48);
    const [color, setColor] = useState('white');

    const handleMainText = (e) => {
        setMainTextValue(e.target.value);
    }

    const handleSignatureText = (e) => {
        setSignatureTextValue(e.target.value);
    }

    const handleTextSize = (e) => {
        setTextSize(e.target.value)
    }

    function formatText() {
        return parseInt(textSize);
    }


    return (
        <div className='container'>
            <Navbar/>

            <div className="App">
                <SideImageGallery setImage={setSelectedImg}/>

                <MainCard selectedImage={selectedImg}
                          mainTextSet={mainTextValue}
                          signText={signatureTextValue}
                          textSizeProp={formatText()}
                          color={color}/>


                <div className='sideEditor'>
                    <SideEditor mainTextIs={handleMainText}
                                sigText={handleSignatureText}
                                textSizePropChange={handleTextSize}/>

                    <div className='colorPicker'>
                    <CompactPicker
                        color={color}
                        onChangeComplete={(color) => {
                            setColor(color.hex)
                        }}
                    />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
