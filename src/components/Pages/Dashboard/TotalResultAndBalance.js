import React from 'react';
import TotalResultChart from './Charts/TotalResultChart';
import TotalResultInfo from './AdditionalInfo/TotalResultInfo';

const TotalResultAndBalance = (props) => (
    <div className="main-chart col-lg-12 col-xl-12">
            <TotalResultChart/>
            <TotalResultInfo />
    </div>
);

export default TotalResultAndBalance;