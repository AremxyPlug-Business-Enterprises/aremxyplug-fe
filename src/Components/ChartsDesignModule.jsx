import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';


export const ChartsDesignModule = ({inflow, outflow}) => {
  console.log(inflow)
  return (
    <div className="flex w-full relative bg-blue-400 lg:h-70 h-auto">
    <LineChart style={{ width: '100%', height :  350, 
      position : "absolute", top : 5, bottom : 5, right : 0, left:5, 
       aspectRatio: 1.618, }} responsive data={inflow}>
      <CartesianGrid />
      <Line dataKey="" />
      <XAxis dataKey="count" />
      <YAxis  width="auto" datakey= "amount"/>
      <Legend />
         <Line type="monotone" dataKey="count" stroke="#8884d8" isAnimationActive={true} />
    <Line type="monotone" dataKey="amount" stroke="#82ca9d" isAnimationActive={true} />
      </LineChart>
       
    
      </div>
  )
}

