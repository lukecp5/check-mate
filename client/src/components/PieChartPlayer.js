import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const PieChartPlayer = (props) => {

    const [chartData] = useState ([
        { title: 'Tie', value: props.tie, color: '#E38627' },
        { title: 'Lose', value: props.lose, color: '#C13C37' },
        { title: 'Win', value: props.win, color: '#6A2135' },
    ]);

    return (
                        <PieChart
                            style={{
                                fontFamily:'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                fontSize: '8px',
                            }}
                            data={chartData}
                            radius={35}
                            lineWidth={60}
                            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                            segmentsShift={1}
                            animate
                            label={(props) => { return props.dataEntry.title;}}
                            // the label below gives the percent value, above give the title of the category
                            // label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                            labelPosition={70}
                            labelStyle={{
                                fill: '#fff',
                                opacity: 0.75,
                                pointerEvents: 'none',
                                fontSize: '3px',
                                fontFamily: 'sans-serif',
                            }}
                        />
    );
};

export default PieChartPlayer;