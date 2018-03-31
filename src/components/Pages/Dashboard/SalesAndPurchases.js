import React from 'react';
import SalesAndPurchasesChart from './Charts/SalesAndPurchasesChart';
import SalesAndPurchasesInfo from './AdditionalInfo/SalesAndPurchasesInfo';

const SalesAndPurchases = (props) => (
    <div className="main-chart col-lg-12 col-xl-12">
        <SalesAndPurchasesChart />
        <SalesAndPurchasesInfo />
    </div>
)

export default SalesAndPurchases;