import React, {useState} from 'react'
import {Howl, Howler} from 'howler';
import Interstellar from '../audio/interstellar.mp3'

function Nav() {
    const [isPlaying, setIsPlaying] = useState(false);
       const sound = new Howl({
        src: Interstellar
       
    })

    const playEventHandler = () => {
         // Toggles play / pause

        //  if (sound.playing()) {
        //     setIsPlaying(false);
        //      return sound.pause();
        //   } else {
        //     setIsPlaying(true);
        //     return sound.play();
            
        //   }
        return sound.playing() ? sound.pause() : sound.play();
    }

    
       
        
    

    return (
        <>
        <div className="music">
 <button className="button" onClick={playEventHandler}>Play</button> 
 {/* {sound.playing() ? 'Mute': 'Play Music'} */}

        
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
