// import dependencies
import React, { useState, useEffect } from 'react';

// let chart
let Chart = null;

// export default
const DashupUIChart = (props = {}) => {
  // create chat
  const [chart, setChart] = useState(!!Chart);

  // use effect
  useEffect(() => {
    // check window
    if (typeof window === 'undefined') return;

    // require later
    const reqChart = require('react-apexcharts');

    // set chart
    Chart = reqChart.default || reqChart;

    // set chart
    setChart(true);
  }, [typeof window !== 'undefined']);
  
  // return logic
  return props.series && chart ? (
    <div className="w-100 h-100">
      <Chart
        width="100%"
        height="100%"
        
        { ...props }
      />
    </div>
  ) : <div />;
};

// export default
export default DashupUIChart;