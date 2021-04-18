// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/waffle
import React from 'react';
import { ResponsiveWaffle } from '@nivo/waffle'
import  { ReactComponent as Moneybag }  from '../../assets/images/Moneybag.svg'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data= [
    {
      "id": "low",
      "label": "low",
      "value": 7.5,
      "color": "#96bb7c"
    },
    {
      "id": "mid",
      "label": "mid",
      "value": 77,
      "color": "#527E32"
    },
    {
      "id": "high",
      "label": "high",
      "value": 15.5,
      "color": "#184d47"
    }
  ]
//const Svgtry= document.getElementById('Svgtest')
              //.setAttribute('x')  
              //.setAttribute('y')  

const testcell = ({
                position,
                size,
                x,
                y,
                color,
                fill,
                opacity,
                borderWidth,
                borderColor,
                data,
                onHover,
                onLeave,
                onClick,
            }) => (
                <Moneybag
                    r={size}
                    x={x-20}
                    y={y -100+ size/2 }
                    fill={fill || color}
                    strokeWidth={borderWidth}
                    stroke={borderColor}
                    opacity={opacity}
                    onMouseEnter={onHover}
                    onMouseMove={onHover}
                    onMouseLeave={onLeave}
                    onClick={event => {
                        onClick({ position, color, x, y, data }, event)
                    }}
                />
                )

const Waffle = () => (
    <ResponsiveWaffle
        data={data}
        total={100}
        rows={4}
        columns={5}
        padding={0}
        margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
        colors={d => d.color}
        cellComponent= {testcell}
        tooltip={({id,value}) => (
            <strong >
                {id}: {value +'%'}
            </strong>
        )}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
        animate={true}
        motionStiffness={90}
        motionDamping={11}
        legends={[
            {
                anchor: 'left',
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