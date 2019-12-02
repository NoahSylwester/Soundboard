import React from 'react';
import './index.css'

function Sound(props) {
    return (
        <span className="sound" onClick={() => props.sound.play()}>
            <h3>
                {props.name}
            </h3>
            <button onClick={(event) => { event.stopPropagation(); props.sound.stop() }}>
                Stop
                </button>
        </span>
    )
}

export default Sound;