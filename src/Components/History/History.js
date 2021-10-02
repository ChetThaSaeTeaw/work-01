import React from 'react';
import "./History.css";
import HistoryBody from './HistoryBody';

function History() {
    return (
        <div className="history-container">
            <div className="history-head">
                <i class="fas fa-arrow-left"></i><h3>History</h3>
            </div>
            <div className="history-body">
                <HistoryBody title="Aug 2018" detail="Partnership with Virtus.pro"/>
                <HistoryBody title="Mar 2019" detail="Best Esports Partner by BR Awards"/>
                <HistoryBody title="Jun 2019" detail="Partnership with Team Spirit"/>
                <HistoryBody title="Sept 2019" detail="We launched the 1st season of Parimatch League tournament"/>
                <HistoryBody title="Dec 2019" detail="Sponsorship of EPICENTER"/>
                <HistoryBody title="Jan 2020" detail="The company became a partner of BLAST Premier"/>
                <HistoryBody title="May 2020" detail="Sponsorship of Cis Esports League"/>
                <HistoryBody title="May 2020" detail="Parimatch is a winner of the Marspo Awards for Best Sponsored   Activation in Esports"/>
                <HistoryBody title="Jul 2020" detail="Zeus became Parimatch brand ambassador"/>
                <HistoryBody title="Sep 2020" detail="Partnership with Fnatic"/>
                <HistoryBody title="Sep 2020" detail="Partnership with HellRaisers"/>
                <HistoryBody title="Jan 2021" detail="Parimatch is the best esports partner by cybersport.ru"/>
                <HistoryBody title="Feb 2021" detail="Marcelo “coldzera” David became Parimatch brand ambassador"/>
            </div>
        </div>
    )
}

export default History;
