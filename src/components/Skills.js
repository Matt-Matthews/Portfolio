import React from "react";
import hex from '../assets/images/hex.png';

export default function Skill({text, img}) {
  return<div className="hoveable"><div className="hex-border"  style={{backgroundImage: `url(${hex})`}}>
          <h5>{text}</h5>
  </div></div> ;
}
