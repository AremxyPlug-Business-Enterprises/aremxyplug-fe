import React, { useContext } from 'react'
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ContextProvider } from './Context';


export const ChartsDesignModule = ({inflow, outflow}) => {
  const { isDarkMode }= useContext(ContextProvider);
  return (
    <div className="flex w-full relative  h-[350px]">
    <LineChart style={{ width: '100%', height :  350, backgroundColor : isDarkMode ? "#000" : "#FFF",
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

