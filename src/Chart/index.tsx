// import dependencies
import { Box } from '../index';
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
    <Box sx={ {
      width  : '100%',
      height : '100%',

      '& .apexcharts-tooltip.apexcharts-theme-light' : {
        boxShadow       : 1,
        borderWidth     : 0,
        backgroundColor : 'background.paper',
      },
      '& .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title' : {
        borderWidth     : 0,
        backgroundColor : 'background.paper',
      }
    } }>
      <Chart
        width="100%"
        height="100%"
        
        { ...props }
      />
    </Box>
  ) : <Box />;
};

// export default
export default DashupUIChart;