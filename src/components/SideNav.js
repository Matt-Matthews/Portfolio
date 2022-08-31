import React from "react";

export default function SideNav({setSelectedIndex, selectedIndex}) {
  return <div className="sideNav-container">
    <div className={selectedIndex===0?"navigator selected":"navigator"} onClick={()=>{window.location.href = '#home'; setSelectedIndex(0)}}></div>
    <div className={selectedIndex===1?"navigator selected":"navigator"} onClick={()=>{window.location.href = '#projects'; setSelectedIndex(1)}}></div>
    <div className={selectedIndex===2?"navigator selected":"navigator"} onClick={()=>{window.location.href = '#projects'; setSelectedIndex(2)}}></div>
    <div className={selectedIndex===3?"navigator selected":"navigator"} onClick={()=>{window.location.href = '#projects'; setSelectedIndex(3)}}></div>
  </div>;
}
