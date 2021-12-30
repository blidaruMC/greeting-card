import React, { useState} from "react";
import './App.scss';
import {SideImageGallery} from "./components/SideImageGallery";
import {MainCard} from "./components/MainCard";
import {SideEditor} from "./components/SideEditor";
import Images from "./Images";

function App() {
const [selectedImg, setSelectedImg] = useState(Images[0]);
const [mainTextValue, setMainTextValue] = useState('');
const [signatureTextValue, setSignatureTextValue] = useState('');

const handleMainText = (e) => {
    setMainTextValue(e.target.value);
}

const handleSignatureText = (e) => {
    setSignatureTextValue(e.target.value);
}


    return (
        <div className="App">
            <SideImageGallery setImage = {setSelectedImg}/>
            <MainCard selectedImage={ selectedImg } mainTextSet = {mainTextValue} signText = {signatureTextValue}/>
            <SideEditor mainTextIs = { handleMainText } sigText = {handleSignatureText}/>
        </div>
    );
}

export default App;
