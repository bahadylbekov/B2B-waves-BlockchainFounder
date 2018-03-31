import React from 'react';

const TimelineChanges = (props) => (
    <div className="timeline-changes">
    <div className="timeline-info">
        <span className="income-mark"/>
        <p className="timeline-text">Income by Month - 301.51 $</p>
    </div>
    <div className="timeline-info">
        <span className="expenses-mark"/>
        <p className="timeline-text">Expense by Month - 105.842 $</p>
    </div>
    <div className="timeline-info">
        <span className="result-mark"/>
        <p className="timeline-text">Total Result by Month - 105.668 $</p>
    </div>
    </div>
);

export default TimelineChanges;