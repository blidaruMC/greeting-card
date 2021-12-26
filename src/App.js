import React, { useState} from "react";
import './App.scss';
import {SideImageGallery} from "./components/SideImageGallery";
import {MainCard} from "./components/MainCard";
import {SideEditor} from "./components/SideEditor";
import Images from "./Images";

function App() {
const [selectedImg, setSelectedImg] = useState(Images[0])


    return (
        <div className="App">
            <SideImageGallery setImage = {setSelectedImg}/>
            <MainCard selectedimage={ selectedImg }/>
            <SideEditor/>
        </div>
    );
}

export default App;
