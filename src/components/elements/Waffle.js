// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/waffle
import React from 'react';
import { ResponsiveWaffle, CustomCell } from '@nivo/waffle'
import svgtest from '../../assets/images/svgtest.svg'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data= [
    {
      "id": "men",
      "label": "men",
      "value": 17.231834537185055,
      "color": "#468df3"
    },
    {
      "id": "women",
      "label": "women",
      "value": 15.844939199813721,
      "color": "#ba72ff"
    },
    {
      "id": "children",
      "label": "children",
      "value": 11.269983968516819,
      "color": "#a1cfff"
    }
  ]

const Waffle = () => (
    <ResponsiveWaffle
        data={data}
        total={100}
        rows={18}
        columns={14}
        margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
        colors={{ scheme: 'nivo' }}
        cellComponent= {(props) => { return (<svgtest/>)}}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
        animate={true}
        motionStiffness={90}
        motionDamping={11}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: -100,
                translateY: 0,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                itemTextColor: '#777',
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                            itemBackground: '#f7fafb'
                        }
                    }
                ]
            }
        ]}
    />
)
export default Waffle ;