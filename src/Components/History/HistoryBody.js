import React from 'react';
import "./HistoryBody.css";

function HistoryBody({ title , detail }) {
    return (
        <>
            <div className="history-body-content">
                <div className="dot-content">
                    <i class="fas fa-ellipsis-v"></i>
                    <i class="fas fa-ellipsis-v"></i>
                    <i class="fas fa-ellipsis-v"></i>
                    <div className="dot-pic"></div>
                </div>
                <div className="text-content">
                    <h3>{title}</h3>
                    <p>{detail}</p>
                </div>
            </div>  
        </>
    )
}

export default HistoryBody;
