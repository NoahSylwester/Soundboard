import React, { Component } from 'react';
import Sound from '../Sound/Sound';
import { Howl } from 'howler';
import './index.css';

import airhorn from '../../sounds/airhorn/414208__jacksonacademyashmore__airhorn.wav';
import xylophone from '../../sounds/cartoon-xylophone-gliss/cartoon-xylophone-gliss.mp3';
import crickets from '../../sounds/cricket-chirp-in-the-night/Cricket-chirp-in-the-night.mp3';
import deer from '../../sounds/deer-call-sound/Deer-call-sound.mp3';
import piano from '../../sounds/piano-sound/piano-sound.mp3';
import rimshot from '../../sounds/rimshot-sound/rimshot-sound.mp3';
import wah from '../../sounds/wah-wah-wah-sound-effect/wah-wah-wah-sound-effect.mp3';
import wilhelm from '../../sounds/wilhelm/64940__syna-max__wilhelm-scream.wav';
import scratch from '../../sounds/scratch/160907__raccoonanimator__cue-scratch.wav';
import laughter from '../../sounds/laughter/371562__kinoton__sitcom-laughter-with-applause-small-audience.wav';
import applause from '../../sounds/applause/440116__processaurus__s-short-applause.wav';
import yay from '../../sounds/yay/1_person_cheering-Jett_Rifkin-1851518140.mp3';
import drama from '../../sounds/drama/76061__digifishmusic__dramatic5.wav';
import bells from '../../sounds/bells/tolling-bell_daniel-simion.mp3';
import fart from '../../sounds/fart/Fart-Common-Everyday-Fart_Mike-Koenig.mp3';
import horn from '../../sounds/horn/392180__kirmm__battle-horn-1.wav';
import coin from '../../sounds/coin/341695__projectsu012__coins-1.wav';


const sounds = {
    airhorn,
    xylophone,
    crickets,
    deer,
    piano,
    rimshot,
    wah,
    wilhelm,
    scratch,
    laughter,
    applause,
    yay,
    drama,
    bells,
    fart,
    horn,
    coin,
 };  


class Board extends Component {
    constructor() {
        super();
        this.state = {
            soundIds: [],
        };
    }
    render() {
        return (
            <div className="Board">
                <h1>Sounds for Tim</h1>
                <div className="soundContainer">
                    <div>{Object.keys(sounds).slice(0,4).map((key) => <Sound name={[key]} sound={new Howl({ src: sounds[key]})} />)}</div>
                    <div>{Object.keys(sounds).slice(4,8).map((key) => <Sound name={[key]} sound={new Howl({ src: sounds[key]})} />)}</div>
                    <div>{Object.keys(sounds).slice(8,12).map((key) => <Sound name={[key]} sound={new Howl({ src: sounds[key]})} />)}</div>
                    <div>{Object.keys(sounds).slice(12,16).map((key) => <Sound name={[key]} sound={new Howl({ src: sounds[key]})} />)}</div>
                </div>
            </div>
        )
    }
}

export default Board;