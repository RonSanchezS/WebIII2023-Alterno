import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App';
import Posts from '../Pages/Posts';
import Persona from '../Pages/Persona';
import Mascota from '../Pages/Mascota';
const Routerconfig = () => {
    return ( <>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/persona" element={<Persona/>}/>
            <Route path="/mascota" element={<Mascota/>}/>
            <Route path="*" element={<h1>404</h1>}/>
        </Routes>
    </> );
}
 
export default Routerconfig;