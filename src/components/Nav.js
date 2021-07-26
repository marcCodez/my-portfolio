import React, {useState} from 'react'
import {Howl, Howler} from 'howler';
import Interstellar from '../audio/interstellar.mp3'

function Nav() {
       
        const sound = new Howl({
            src: Interstellar
        })
        
    

    return (
        <>
        <div className="music">
        <button onClick={sound.pause()}>Mute</button>
        </div>
        <nav className="nav">
            <button>About</button>
            <button>Work</button>
            <button>Contact</button>
        </nav>
        </>
    )
}

export default Nav
