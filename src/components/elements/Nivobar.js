// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
      "Percentage": "Level 2 (220V)(Free)",
      "hot dog": 0,
      "hot dogColor": "hsl(69, 70%, 50%)",
      "burger": 118,
      "burgerColor": "hsl(117, 70%, 50%)",
      "sandwich": 54,
      "sandwichColor": "hsl(62, 70%, 50%)",
      "kebab": 154,
      "kebabColor": "hsl(284, 70%, 50%)",
      "fries": 133,
      "friesColor": "hsl(268, 70%, 50%)",
      "donut": 126,
      "donutColor": "hsl(152, 70%, 50%)"
    },
    {
      "Percentage": "AE",
      "hot dog": 81,
      "hot dogColor": "hsl(181, 70%, 50%)",
      "burger": 130,
      "burgerColor": "hsl(295, 70%, 50%)",
      "sandwich": 99,
      "sandwichColor": "hsl(323, 70%, 50%)",
      "kebab": 109,
      "kebabColor": "hsl(113, 70%, 50%)",
      "fries": 170,
      "friesColor": "hsl(29, 70%, 50%)",
      "donut": 155,
      "donutColor": "hsl(349, 70%, 50%)"
    },
    {
      "Percentage": "AF",
      "hot dog": 181,
      "hot dogColor": "hsl(292, 70%, 50%)",
      "burger": 85,
      "burgerColor": "hsl(286, 70%, 50%)",
      "sandwich": 180,
      "sandwichColor": "hsl(26, 70%, 50%)",
      "kebab": 22,
      "kebabColor": "hsl(178, 70%, 50%)",
      "fries": 113,
      "friesColor": "hsl(12, 70%, 50%)",
      "donut": 24,
      "donutColor": "hsl(298, 70%, 50%)"
    },
    {
      "Percentage": "AG",
      "hot dog": 0,
      "hot dogColor": "hsl(176, 70%, 50%)",
      "burger": 72,
      "burgerColor": "hsl(32, 70%, 50%)",
      "sandwich": 167,
      "sandwichColor": "hsl(289, 70%, 50%)",
      "kebab": 108,
      "kebabColor": "hsl(218, 70%, 50%)",
      "fries": 115,
      "friesColor": "hsl(227, 70%, 50%)",
      "donut": 198,
      "donutColor": "hsl(116, 70%, 50%)"
    },
    {
      "Percentage": "AI",
      "hot dog": 11,
      "hot dogColor": "hsl(231, 70%, 50%)",
      "burger": 115,
      "burgerColor": "hsl(185, 70%, 50%)",
      "sandwich": 143,
      "sandwichColor": "hsl(209, 70%, 50%)",
      "kebab": 77,
      "kebabColor": "hsl(86, 70%, 50%)",
      "fries": 176,
      "friesColor": "hsl(29, 70%, 50%)",
      "donut": 88,
      "donutColor": "hsl(155, 70%, 50%)"
    },
    {
      "Percentage": "AL",
      "hot dog": 16,
      "hot dogColor": "hsl(172, 70%, 50%)",
      "burger": 193,
      "burgerColor": "hsl(251, 70%, 50%)",
      "sandwich": 115,
      "sandwichColor": "hsl(31, 70%, 50%)",
      "kebab": 27,
      "kebabColor": "hsl(292, 70%, 50%)",
      "fries": 3,
      "friesColor": "hsl(209, 70%, 50%)",
      "donut": 5,
      "donutColor": "hsl(178, 70%, 50%)"
    },
    {
      "Percentage": "AM",
      "hot dog": 63,
      "hot dogColor": "hsl(186, 70%, 50%)",
      "burger": 75,
      "burgerColor": "hsl(8, 70%, 50%)",
      "sandwich": 151,
      "sandwichColor": "hsl(210, 70%, 50%)",
      "kebab": 136,
      "kebabColor": "hsl(291, 70%, 50%)",
      "fries": 157,
      "friesColor": "hsl(146, 70%, 50%)",
      "donut": 24,
      "donutColor": "hsl(89, 70%, 50%)"
    }
  ]


const Nivobar = () => (
    <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="Percentage"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.25}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Percentage',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableGridY={false}
        labelSkipWidth={5}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', '1.6' ] ] }}
        legends={[]}
        tooltip={function(){}}
        animate={false}
        motionStiffness={90}
        motionDamping={15}
    />
)
export default Nivobar ;