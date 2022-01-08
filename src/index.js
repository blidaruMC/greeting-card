import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Navbar} from "./navbar/Navbar";
import {Contact} from "./contactPage/Contact";


ReactDOM.render(
    <React.StrictMode>
        <div className='allContent'>
            <BrowserRouter>
                <Navbar/>
                <div className='allPages'>

                    <Routes>
                        <Route exact path='/' element={<App/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </Routes>

                </div>

            </BrowserRouter>


        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

