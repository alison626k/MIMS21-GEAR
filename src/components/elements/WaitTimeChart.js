// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/heatmap
import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    Waiting: "Less Than Helf of The Time",
    "1-5": 35,
    "1-5Color": "hsl(173, 100%, 7%)",
    "6-10": 2,
    "6-10Color": "hsl(242, 70%, 50%)",
    "11-15": 3,
    "11-15Color": "hsl(201, 70%, 50%)",
    "16-20": 0,
    "16-20Color": "hsl(20, 70%, 50%)",
    "21-40": 0,
    "21-40Color": "hsl(47, 70%, 50%)",
    "over 40": 0,
    "over40Color": "hsl(47, 70%, 50%)",
  },
  {
    Waiting: "Helf of The Time",
    "1-5": 21,
    "1-5Color": "hsl(173, 100%, 7%)",
    "6-10": 5,
    "6-10Color": "hsl(242, 70%, 50%)",
    "11-15": 1,
    "11-15Color": "hsl(201, 70%, 50%)",
    "16-20": 0,
    "16-20Color": "hsl(20, 70%, 50%)",
    "21-40": 1,
    "21-40Color": "hsl(47, 70%, 50%)",
    "over 40": 2,
    "over40Color": "hsl(47, 70%, 50%)",
  },
  {
    Waiting: "Helf of The Time",
    "1-5": 21,
    "1-5Color": "hsl(173, 100%, 7%)",
    "6-10": 5,
    "6-10Color": "hsl(242, 70%, 50%)",
    "11-15": 1,
    "11-15Color": "hsl(201, 70%, 50%)",
    "16-20": 0,
    "16-20Color": "hsl(20, 70%, 50%)",
    "21-40": 1,
    "21-40Color": "hsl(47, 70%, 50%)",
    "over 40": 2,
    "over40Color": "hsl(47, 70%, 50%)",
  },
  {
    Waiting: "Most of The Time",
    "1-5": 4,
    "1-5Color": "hsl(173, 100%, 7%)",
    "6-10": 1,
    "6-10Color": "hsl(242, 70%, 50%)",
    "11-15": 0,
    "11-15Color": "hsl(201, 70%, 50%)",
    "16-20": 1,
    "16-20Color": "hsl(20, 70%, 50%)",
    "21-40": 1,
    "21-40Color": "hsl(47, 70%, 50%)",
    "over 40": 0,
    "over40Color": "hsl(47, 70%, 50%)",
  },
  {
    Waiting: "Never",
    "1-5": 7,
    "1-5Color": "hsl(173, 100%, 7%)",
    "6-10": 0,
    "6-10Color": "hsl(242, 70%, 50%)",
    "11-15": 2,
    "11-15Color": "hsl(201, 70%, 50%)",
    "16-20": 0,
    "16-20Color": "hsl(20, 70%, 50%)",
    "21-40": 0,
    "21-40Color": "hsl(47, 70%, 50%)",
    "over 40": 0,
    "over40Color": "hsl(47, 70%, 50%)",
  }
];


const WaitTimeChart = () => (
  <ResponsiveHeatMap
  
    data={data}
    keys={[
      "1-5",
      "6-10",
      "11-15",
      "16-20",
      "21-40",
      "over 40"

    ]}
    indexBy="Waiting"
    margin={{ top: 90, right: -100, bottom: -50, left: 0 }}
    forceSquare={true}
    axisTop={{
      orient: "top",
      tickSize: 10,
      tickPadding: 5,
      tickRotation: -90,
      legend: "Public Charger Distance to Home (in miles)",
      legendOffset: -80,
      legendFontSize: 16
    }}
    axisRight={null}
    axisBottom={null}
    axisLeft={{
      orient: "left",
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Waiting Frequency",
      legendTitlwSize:25,
      legendPosition: "middle",
      legendOffset: -150,
      legendAngle: -40
    }}
    cellShape="circle"
    colors="greens"
    cellOpacity={1}
    cellBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.8]] }}
    defs={[
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(0, 0, 0, 0.1)",
        rotation: -45,
        lineWidth: 4,
        spacing: 7
      }
    ]}
    fill={[{ id: "lines" }]}
    animate={true}
    motionConfig="wobbly"
    motionStiffness={80}
    motionDamping={9}
    hoverTarget="cell"
    cellHoverOthersOpacity={0.25}
  />
);

export default WaitTimeChart;