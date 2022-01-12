import React, {useState, useEffect} from "react";
import './App.scss';
import {SideImageGallery} from "./components/SideImageGallery";
import {MainCard} from "./components/MainCard";
import {SideEditor} from "./components/SideEditor";
import Images from "./Images";
import {CompactPicker} from 'react-color';


function App() {
    const [selectedImg, setSelectedImg] = useState(Images[0]);
    const [mainTextValue, setMainTextValue] = useState('');
    const [signatureTextValue, setSignatureTextValue] = useState('');
    const [textSize, setTextSize] = useState(48);
    const [color, setColor] = useState('');
    const [quote, setQuote] = useState('')

    const handleMainText = (e) => {
        setMainTextValue(e.target.value);
    }

    const handleSignatureText = (e) => {
        // setSignatureTextValue(e.target.value);
    }

    const handleTextSize = (e) => {
        setTextSize(e.target.value)
    }

    function formatText() {
        return parseInt(textSize);
    }

    const getAdvice = () => {
        fetch(`https://api.adviceslip.com/advice`)
            .then(response => response.json())
            .then(res => {
                const {advice} = res.slip;
                console.log(advice)
                if(advice.length <= 100) {
                    setQuote(advice)
                }


            })
    }

    useEffect(() => {
        getAdvice();

    }, []);


    return (
        <div className='container'>


            <div className="App">
                <SideImageGallery setImage={setSelectedImg}/>

                <MainCard selectedImage={selectedImg}
                          mainTextSet={mainTextValue}
                          signText={signatureTextValue}
                          textSizeProp={formatText()}
                          color={color}
                          quote={quote}
                />


                <div className='sideEditor'>
                    <SideEditor mainTextIs={handleMainText}
                                sigText={handleSignatureText}
                                newQuote = {getAdvice}
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
