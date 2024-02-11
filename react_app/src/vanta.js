import React, { useEffect } from "react";
import BIRDS from "vanta/src/vanta.birds"



function Vanta() {

  useEffect(() => {
    BIRDS({
        el:"#vantajs",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x90909,
        color1: 0xf70a0a,
        colorMode: "variance"
    })
  }, []);

  return (
    <div id="vantajs" style={{width : "100vw" , height:"100vh"}}>
      <p style={{ color: "#fff", paddingTop: "20px" }}>
        Animated website backgrounds in a few lines of code.
      </p>
    </div>
  );
}

export default Vanta;
