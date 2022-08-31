import React from "react";
import logo from '../assets/images/logo.png'

export default function NavBar({setSelectedIndex, selectedIndex}) {
  
  return <div className="navbar">
    <img src={logo} alt="Logo" />
    <div className="nav">

        <button className={selectedIndex===0? "btn selected":"btn"} onClick={()=>{window.location.href = '#home'; setSelectedIndex(0)}}>Home</button>
        <button className={selectedIndex===1? "btn selected":"btn"} onClick={()=>{window.location.href = '#projects'; setSelectedIndex(1)}}>Projects</button>
        <button className={selectedIndex===2? "btn selected":"btn"} onClick={()=>{window.location.href = '#projects'; setSelectedIndex(2)}}>About me</button>
        <button className="button" onClick={()=>{window.location.href = '#projects'; setSelectedIndex(3)}}>Contact me</button>
    </div>
  </div>;
}
