/* eslint-disable no-unused-vars */
import React from 'react';
import DeepEarth from './image-deep-earth.jpg';
import NightArcade from './image-night-arcade.jpg';
import SoccerTeam from './image-soccer-team.jpg';
import TheGrid from './image-grid.jpg';
import FromUp from './image-from-above.jpg';
import Pocker from './image-pocket-borealis.jpg';
import Curiosity from './image-curiosity.jpg';
import MakeIt from './image-fisheye.jpg'
function Grid() {
    return <span className='span'>
        <div className='gridDiv'>
            <h3>OUR CREATIONS</h3>
            <button>SEE ALL</button>
        </div>
        <div className='row'>
                <div className='col col-1'>
                    <img src={DeepEarth} alt='deep' />
                </div>
                <div className='col col-2'>
                    <img src={NightArcade} alt='Nights' />
                </div>
                <div className='col col-3'>

                </div>
                <div className='col col-4'>

                </div>
            </div>
    </span>
}

export default Grid