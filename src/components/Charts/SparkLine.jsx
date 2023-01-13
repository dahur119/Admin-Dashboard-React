import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';





const SparkLine = ({ id, height, width, color, data, type, currentColor }) =>{
 
  
        return (
        <SparklineComponent
           id={id} 
          height={height}
           width={width}
           border={{ color: currentColor, width: 2 }}
            axisSettings={{
            minX: -1, maxX: 7, maxY: 8, minY: -1

        }}

         fill={color} valueType='Category' xName='x' yName='y' dataSource={[
            { x: 'Mon', y: 3 },
            { x: 'Tue', y: 5 },
            { x: 'Wed', y: 2 },
            { x: 'Thu', y: 4 },
            { x: 'Fri', y: 6 },
        ]} 
        // To enable tooltip for sparkline
        tooltipSettings={{
            visible: true,
            // formatting tooltip text
            format: '${x} : ${y}'
        }}>
    <Inject services={[SparklineTooltip]}/>
</SparklineComponent>);

}

export default SparkLine