import React from 'react';
import BalanceInfo from './BalanceInfo';
import TimelineChanges from './TimelineChanges';

const TotalResultInfo = (props) => (
    <div className="additional-info col-lg-4 col-xl-4">
        <span className="info-icon" />
        <p className="info-title">Amount of Balance</p>
        <BalanceInfo />
        <TimelineChanges />
    </div>
);

export default TotalResultInfo;
