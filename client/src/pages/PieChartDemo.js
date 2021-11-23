import React from 'react';
import { Container } from '@mui/material';

import { PieChart } from 'react-minimal-pie-chart';


const PieChartDemo = () => {

    // for the first pie chart I made, it took label stlye as a 
    // const defaultLabelStyle = {
    //     fontSize: '3px',
    //     fontFamily: 'sans-serif',
    // };

    const data = [
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
    ];

    return (
        <Container>
            {/* This first pie chart sucks, thats why I commented it out
            
            <PieChart
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
                radius={25}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                labelPosition={60}
                labelStyle={defaultLabelStyle}
                segmentsShift={1}
                segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                animate={true}
                animationDuration={1000}
            />; */}


             <PieChart
                style={{
                    fontFamily:'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                    fontSize: '8px',
                 }}
                data={data}
                radius={25}
                lineWidth={60}
                segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                segmentsShift={1}
                animate
                label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                labelPosition={70}
                labelStyle={{
                    fill: '#fff',
                    opacity: 0.75,
                    pointerEvents: 'none',
                    fontSize: '3px',
                    fontFamily: 'sans-serif',
                }}
            />
        </Container>
    );
};

export default PieChartDemo;