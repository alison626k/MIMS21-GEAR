import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Label,
  LabelList,
  Tooltip 
} from "recharts";

const renderCustomizedLabel = (p) => {
  const { content, ...rest } = p;

  return <Label {...rest} fontSize="11" fill="#fdfdfd" fontWeight="bold" />;
};

    const data = [
      {
        name: "Avoid PCEV usage ",
        "prefer pcev": 2.5,
        "somewhat prefer pcev": 8.09,
        neutral: 21.7,
        "prefer gasoline": 22.55,
        "somewhat prefer gasoline": 45.11
      },
      {
        name: "Didn't Avoid PCEV usage",
        "prefer pcev": 5.8,
        "somewhat prefer pcev": 5.8,
        neutral: 34.78,
        "prefer gasoline": 26.0,
        "somewhat prefer gasoline": 27.54
      }
    ]

    export default function ChargerConnivence() {    
    return (
      <div className="content c-white">
        <p style={{fontSize:'14px', whiteSpace: 'nowrap'}} >
          PCEV/Gasoline prpreferference by by Concerns about Charging station availability
        </p>

        <BarChart
          height={250}
          width={600}
          layout="vertical"
          data={data}
          margin={{ left: 0, right: 20 }}
          stackOffset="expand"

        >
          <CartesianGrid />
          <XAxis type="number" tickFormatter={(tick) => `${tick}%`} fontSize="14"/>

          <YAxis
            type="category"
            dataKey="name"
            stroke="#0a0a0a"
            fontSize="14"
            width={30}
          />

          <Legend wrapperStyle={{top: 250, left: 25 ,fontSize:'0.8em'}}/>

          <Bar dataKey="prefer pcev" fill="#82ba7f" stackId="a" animationBegin={100} animationDuration={1000} animationEasing="ease-out">
            <LabelList
              dataKey="prefer pcev"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Bar dataKey="somewhat prefer pcev" fill="#82ca9d" stackId="a" animationBegin={100} animationDuration={1000} animationEasing="ease-out">
            <LabelList
              dataKey="somewhat prefer pcev"
              position="center"
              content={renderCustomizedLabel}
              fontSize="15"
            />
          </Bar>

          <Bar dataKey="neutral" fill="#bfc2be" stackId="a" animationBegin={100} animationDuration={1000} animationEasing="ease-out">
            <LabelList
              dataKey="neutral"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Bar dataKey="somewhat prefer gasoline" fill="#ebbd8f" stackId="a" animationBegin={100} animationDuration={1000} animationEasing="ease-out">
            <LabelList
              dataKey="somewhat prefer gasoline"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Bar dataKey="prefer gasoline" fill="#ba8754" stackId="a" animationBegin={100} animationDuration={1000} animationEasing="ease-out">
            <LabelList
              dataKey="prefer gasoline"
              position="center"
              content={renderCustomizedLabel}
            />
          </Bar>
        </BarChart>
      </div>
    );
  }