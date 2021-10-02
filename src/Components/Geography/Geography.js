import React from 'react';
import './Geography.css';
import Geography_Pic from '../../Image/geography.png';

function Geography() {
    return (
        <div className="geography-container">
            <div className="geography-head">
                <i class="fas fa-arrow-left"></i><h3>Geography</h3>
            </div>
            <p>Every time we look at the world map, we see more and more electric yellow spots on it. Parimatch has already operated in 10 countries around the world. And the rest of the world is coming soon!</p>
            <img src={Geography_Pic} alt="Geography-Pic" />
        </div>
    )
}

export default Geography;
