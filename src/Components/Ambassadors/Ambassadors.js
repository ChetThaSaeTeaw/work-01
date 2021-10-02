import React from 'react';
import './Ambassadors.css';
import ambassadors from '../../Image/ambassadors.png';

function Ambassadors() {
    return (
        <div className="ambassadors-container">
            <div className="ambassadors-head">
                <i class="fas fa-arrow-left"></i><h3>Ambassadors</h3>
            </div>   
            <p>Coldzera is the best CS:GO player of 2016 and 2017. And he will stay the best for us. Marcelo joined Parimatch in early 2021 and now he is one of our top esports ambassadors.</p>
            <img src={ambassadors} alt="Ambassadors" />
        </div>
    )
}

export default Ambassadors;
