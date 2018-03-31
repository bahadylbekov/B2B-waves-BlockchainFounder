import React from 'react';
import Difference from './Difference';
import SalesAndPurchasesChartLegend from './SalesAndPurchasesChartLegend';

const SalesAndPurchasesInfo = (props) => (
    <div className="additional-info col-lg-4 col-xl-4">
        <p className="difference-title">Profit and Loss</p>
        <Difference />
        <SalesAndPurchasesChartLegend />
    </div>
);

export default SalesAndPurchasesInfo;
