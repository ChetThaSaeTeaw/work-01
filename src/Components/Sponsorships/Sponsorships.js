import React from 'react';
import './Sponsorships.css';
import Sponsor1 from '../../Image/sponsor1.png';
import Sponsor2 from '../../Image/sponsor2.png';
import Sponsor3 from '../../Image/sponsor3.png';
import Sponsor4 from '../../Image/sponsor4.png';
import Sponsor5 from '../../Image/sponsor5.png';

function Sponsorships() {
    return (
        <div className="sponsorships-container">
            <div className="sponsorships-head">
                <i class="fas fa-arrow-left"></i><h3>Sponsorships</h3>
            </div>   
            <p>We are happy to be friends with Fnatic, Virtus.pro, Team Spirit, HellRaisers, and Pavaga Gaming. And we are glad to play on the same team with the legendary coldzera. All of them are our global partners.</p>
            <p>We have recently supported the second season of the EPIC League in Dota 2 and the first Ukrainian Esports Cup, making our contribution to the development of esports in the CIS countries.</p>
            <div className="sponsorships-logo">
                <img src={Sponsor1} alt="sponsorships-1" />
                <img src={Sponsor2} alt="sponsorships-2" />
                <img src={Sponsor3} alt="sponsorships-3" />
                <img src={Sponsor4} alt="sponsorships-4" />
                <img src={Sponsor5} alt="sponsorships-5" />
            </div>
        </div>
    )
}

export default Sponsorships;
