import { motion} from "framer-motion"

export const CircularProgress=({percentage, strokeWidth, width,size, color})=> {
const radius = (width - strokeWidth)/ 2;
const circumference = 2 * Math.PI * radius;
const offset = circumference - (percentage/ 100) * circumference 
    return (
        <div className ="flex flex-col items-center justify-center">
        <svg width ={size} height ={size}>
            <circle
            stroke ="CurrentColor"
            className="text-gray-300"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size/2}
            cy={size/2}
            />
            <motion.circle
            stroke ="CurrentColor"
            className={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLineCap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            r={radius}
            cx={size/2}
            cy={size/2}
            initial ={{strokeDashoffset : circumference}}
            animate={{strokeDashoffset : offset}}
            transition ={{duration : 1.5, ease : "easeOut"}}
            />

    </svg>
    <span className="mt-2 text-lg font-semibold">
        {percentage}%
    </span>
        

       

        </div>
    
    )
}