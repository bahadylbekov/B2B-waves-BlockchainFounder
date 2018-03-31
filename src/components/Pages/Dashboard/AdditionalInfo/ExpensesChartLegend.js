import React from 'react';

const SalesAndPurchasesChartLegend = (props) => (
    <div className="expenses-chart-legend">
    <div className="chart-info">
        <span className="advertising-mark"/>
        <p className="legend-text">Advertising</p>
    </div>
    <div className="chart-info">
        <span className="payroll-mark"/>
        <p className="legend-text">Payroll</p>
    </div>
    <div className="chart-info">
        <span className="reinvestment-mark"/>
        <p className="legend-text">Reinvestment</p>
    </div>
    </div>
);

export default SalesAndPurchasesChartLegend;