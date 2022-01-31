import React from 'react';
import ReactDOM from 'react-dom';
// import Home from "./components/Home/Home";
// import App from './App';
import { BrowserRouter} from "react-router-dom";
// import Footer from './components/Home/Footer';
// import ContactMe from "./components/Contact/ContactMe";
// import Resume from "./components/About/Resume";
import Chat from "./components/Chatting/Chat";
// import AboutCo from "./components/About/AboutCo";
// import Ride from "./components/Ride/Ride";
// import Map from "./components/Ride/maps/Map";
import store from "./store";
import {Provider} from "react-redux";
store.subscribe(()=>console.log(store.getState()));

// ReactDOM.render(
//                 <>
//                 <React.StrictMode>
//          <BrowserRouter>
//      <App/>
//   </BrowserRouter>
//   </React.StrictMode>,
//         </>,document.getElementById("root"));
        

        ReactDOM.render(
        <>
<React.StrictMode>
<BrowserRouter>
<Provider store={store}>
<Chat/>
</Provider>
</BrowserRouter>
</React.StrictMode>
</>
,document.getElementById("root"));

// ReactDOM.render(
//         <>
//         <Map/>
//         </>,document.getElementById("root")
// )