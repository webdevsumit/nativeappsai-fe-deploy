import React, { useState } from 'react';
import './style.css';

import { scaleLinear, scaleBand } from 'd3-scale';

import Line from './line/line';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import XYAxis from './axis/xy-axis';

let initData = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 0 },
    { name: 'Mar', value: 0 },
    { name: 'Apr', value: 0 },
    { name: 'May', value: 0 },
    { name: 'Jun', value: 0 },
    { name: 'Jul', value: 0 },
    { name: 'Aug', value: 0 },
    { name: 'Sep', value: 0 },
    { name: 'Oct', value: 0 },
    { name: 'Nov', value: 0 },
    { name: 'Dec', value: 0 },
]

function NormalLineChart({ formatedData=null }) {

    const [data,] = useState(!!formatedData?formatedData:initData);
    const parentWidth = window.innerWidth<700? window.innerWidth : 700 ;

    const margins = {
        top: 20,
        right: 25,
        bottom: 20,
        left: 40,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

    const ticks = 5;
    const t = transition().duration(1000);

    const xScale = scaleBand()
        .domain(data.map(d => d.name))
        .rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
        .domain(extent(data, d => d.value))
        .range([height, 0])
        .nice();

    const bandWidth = xScale.bandwidth();
    const xOffset = bandWidth / 2;

    const lineGenerator = line()
        .x(d => xScale(d.name) + xOffset)
        .y(d => yScale(d.value))
        .curve(curveMonotoneX);

    return (
        <div className='NormalLineChart'>
            <svg
                className="lineChartSvg"
                width={width + margins.left + margins.right}
                height={height + margins.top + margins.bottom}
            >
                <g transform={`translate(${margins.left}, ${margins.top})`}>
                    <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                    <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
                </g>
            </svg>
        </div>
    )
}

export default NormalLineChart