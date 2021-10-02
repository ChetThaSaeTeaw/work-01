import React from 'react';
import "./TopContent.css";
import Top_Image from '../../Image/topImage.png';

function TopContent() {
    return (
        <div className="top-content">
            <p>Welcome to Parimatch</p>
            <img src={Top_Image} alt="Top-Pic" />
            <p>Parimatch is a global technology company. We are fans of sports, emotions, and entertainment. And also we support sponsorship and charity events.</p>
            <p>We are almost 30. Some companies become boring and no longer like changes at this age. But no, that's not us. We are still feisty, assertive, and alive. How have we achieved all of that?</p>
            <i class="fas fa-arrow-down"></i>
        </div>
    )
}

export default TopContent;
