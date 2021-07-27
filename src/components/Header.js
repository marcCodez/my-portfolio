import React, { useState, useEffect, useRef } from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import Typewriter from 'typewriter-effect';
// import Container from 'react-bootstrap/Container';



function Header() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(CLOUDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundColor: 0x0,
          skyColor: 0x0,
          cloudColor: 0xb1b1b1,
          cloudShadowColor: 0x272727,
          sunColor: 0x29f3c3,
          sunGlareColor: 0x21c59e,
          sunlightColor: 0x29f3c3
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (
        <section className="d-flex justify-content-center align-items-center" id="header" ref={myRef}>
            
<div className="text-center header-text">
<h1 className="name-style">Greetings Earthlings, <span className="name">I'm Marc!</span></h1>
<Typewriter
  options={{
    strings: ['Web Developer', 'Freelancer'],
    autoStart: true,
    loop: true,
  }}
/>

</div>
            
            
        </section>
    )
}

export default Header
