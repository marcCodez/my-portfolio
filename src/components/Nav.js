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
        <button className="button" onClick={sound.pause()}>Mute</button>
        </div>
        <nav className="nav">
            <button className="button">About</button>
            <button className="button mx-4">Work</button>
            <button className="button">Contact</button>
        </nav>
        </>
    )
}

export default Nav
