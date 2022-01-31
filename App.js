import React from 'react';
import { BrowserRouter,Router, Routes, Route,HomeLayout } from "react-router-dom";
import { Navigate } from 'react-router';
import AboutCo from "./components/About/AboutCo";
import ContactMe from "./components/Contact/ContactMe";
import Ride from "./components/Ride/Ride";
import Careers from "./components/Careers/Careers";
import Home from "./components/Home/Home";
import Chat from "./components/Chatting/Chat";
// import Main from "./components/Home/Main";
import Maps from "./components/Ride/maps/Map";
function App() {
    // const [loggedIn, setLoggedIn] = React.useState(false);
    return (
        <>
            <div className='App'>
                    <Routes>
                        {/* <Route exact path='/'>
                            {loggedIn?<Navigate to="/"/>:<Main/>}
                        </Route> */}
                        {/* <Route exact path='/main' element={Main}/> */}
                        <Route path='/' element={<Home/>} />
                        <Route path='/aboutCo' element={<AboutCo/>} />
                        <Route path='/contactMe' element={<ContactMe/>} />
                        <Route path='/ride' element={<Ride/>} />
                        <Route path='/careers' element={<Careers/>} />
                        <Route path='/maps' element={<Maps/>}/>
                        <Route path='/chat' element={<Chat/>}/>
                        {/* <Route component={Error}/> */}
                    </Routes>
            </div>
        </>
    );
}

export default App;