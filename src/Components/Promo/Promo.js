import React from 'react';
import './Promo.css';
import carousel1 from '../../Image/carousel1.png';
import carousel2 from '../../Image/carousel2.png';
import carousel3 from '../../Image/carousel3.png';

function Promo() {
    return (
        <div className="promo-container">
            <div className="promo-head">
                <i class="fas fa-arrow-left"></i><h3>Ambassadors</h3>
            </div>   
                <p>Coldzera is the best CS:GO player of 2016 and 2017. And he will stay the best for us. Marcelo joined Parimatch in early 2021 and now he is one of our top esports ambassadors.</p>
            <div className="promo-carousel">
                <img src={carousel1} alt="Promo-Pic" />
                <img src={carousel2} alt="Promo-Pic" />
                <img src={carousel3} alt="Promo-Pic" />
            </div>
            <p>A lot of interesting moments, places, and people are waiting for us. We will open new countries for you, share with you our feelings and entertain you with new activities.</p>
            <p>Follow us on social networks and you won't miss anything!</p>
            <i class="fab fa-instagram"></i>
        </div>
    )
}

export default Promo;
