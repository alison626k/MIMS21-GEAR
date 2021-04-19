
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label
} from "recharts";

const data = [
  {
    name: "Level 1",
    "see 1": 26.92,
    "see 2": 25,
    "see 3": 32.69,
    "see 4": 15.38
  },
  {
    name: "Level 2",
    "see 1": 31.16,
    "see 2": 22.79,
    "see 3": 29.3,
    "see 4": 16.74
  },
  {
    name: "Level 3",
    "see 1": 23.35,
    "see 2": 19.29,
    "see 3": 39.09,
    "see 4": 18.27
  },
  {
    name: "Level 4",
    "see 1": 14.24,
    "see 2": 18.04,
    "see 3": 41.46,
    "see 4": 26.27
  },
  {
    name: "Level 5",
    "see 1": 16.76,
    "see 2": 13.49,
    "see 3": 45.66,
    "see 4": 24.08
  },
  {
    name: "Level 6",
    "see 1": 11.74,
    "see 2": 11.74,
    "see 3": 47.35,
    "see 4": 29.17
  },
  {
    name: "Level 7",
    "see 1": 8.44,
    "see 2": 7.82,
    "see 3": 43.87,
    "see 4": 39.88
  },
  {
    name: "Level 8",
    "see 1": 8.71,
    "see 2": 6.31,
    "see 3": 42.94,
    "see 4": 42.04
  },
  {
    name: "Level 9",
    "see 1": 8.16,
    "see 2": 7.65,
    "see 3": 36.73,
    "see 4": 47.45
  },
  {
    name: "Level 10",
    "see 1": 7.27,
    "see 2": 5.45,
    "see 3": 31.36,
    "see 4": 55.91
  },
  {
    name: "Level 11",
    "see 1": 8.24,
    "see 2": 12.54,
    "see 3": 48.39,
    "see 4": 30.82
  }
];

export default function IncomeLevelCharger() {
  return (
    <div style = {{marginTop:10}  }>
      <p style = {{fontSize:'16px'}} >Number of spotted charging stations (by income level) </p>

      <AreaChart
        width={500}
        height={80}
        data={data}
        syncId="anyId"
        margin={{
          top: 0,
          right: 0,
          left: 40,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis hide dataKey="name" />
        <YAxis domain={[0, 60]} tickFormatter={(tick) => `${tick}%` } fontSize='0.8em' >
          <Label value="1" angle={0} position="left" offset={2} />
        </YAxis>
        <Tooltip />
        <Area type="monotone" dataKey="see 1" stroke="#A3E2C7" fill="#96bb7c" />
      </AreaChart>

      
      <AreaChart
        width={500}
        height={80}
        data={data}
        syncId="anyId"
        margin={{
          top: 0,
          right: 0,
          left: 40,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis hide dataKey="name" />
        

        <YAxis domain={[0, 60]} tickFormatter={(tick) => `${tick}%`} fontSize='0.8em'>
          <Label angle={0} value="2" position="left" offset={2} />
        </YAxis>


        <Tooltip />
        <Area type="monotone" dataKey="see 2" stroke="#82ca9d" fill="#719d52" />
      </AreaChart>


      <AreaChart
        width={500}
        height={80}
        data={data}
        syncId="anyId"
        margin={{
          top: 0,
          right: 0,
          left: 40,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis hide dataKey="name"  />
        <YAxis domain={[0, 60]} tickFormatter={(tick) => `${tick}%`} fontSize='0.8em' 
        label={{ value: '# of stations/% of people of each income level', fontSize:"0.7em",angle: -90, position: 'middle' ,  dx: -70 ,dy:-30}}>
          <Label angle={0} value="3" position="left" offset={2} />
        </YAxis>
        <Tooltip />
        <Area type="monotone" dataKey="see 3" stroke="#82ca9d" fill="#527E32" />
      </AreaChart>

      <AreaChart
        width={500}
        height={100}
        data={data}
        syncId="anyId"
        margin={{
          top: 0,
          right: 0,
          left: 40,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="name" fontSize='0.7em' 
        label={{ value: 'Income Level (low to high)', fontSize:"0.7em",angle: 0, position: 'middle',  dy: 40 }} />

        <YAxis domain={[0, 60]} tickFormatter={(tick) => `${tick}%`} fontSize='0.8em ' >
          <Label angle={0} value=">4" position="left" offset={0} />
        </YAxis>
        <Tooltip />
        <Area type="monotone" dataKey="see 4" stroke="#82ca9d" fill="#427771" />
      </AreaChart>
    </div>
  );
}