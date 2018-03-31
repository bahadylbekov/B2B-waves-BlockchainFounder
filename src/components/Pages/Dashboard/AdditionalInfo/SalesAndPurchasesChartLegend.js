import React from 'react';

const SalesAndPurchasesChartLegend = (props) => (
    <div className="chart-legend">
    <div className="chart-info">
        <span className="sales-mark"/>
        <p className="legend-text">Income by Month - 301.51 $</p>
    </div>
    <div className="chart-info">
        <span className="purchases-mark"/>
        <p className="legend-text">Expense by Month - 105.842 $</p>
    </div>
    </div>
);

export default SalesAndPurchasesChartLegend;