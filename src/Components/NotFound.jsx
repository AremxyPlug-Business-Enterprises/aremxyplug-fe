import { Link } from "react-router-dom"



 const NotFound = () => {
 const userStatus = localStorage.getItem("cxccxfd")
 return (
  <div className = {` w-full flex flex-col justify-center items-center h-[700px] mb-[-100px] bg-blue-600 `}>
  <h2 className = "text-[18px] text-white leading-[24px] lg:text-[20px] lg:leading-[26px] font-[800]">
  OOPs, This page does not exist...
  </h2>
  <Link to = {userStatus ? "/dashboard" : "/" }
  className="mt-8 bg-primary text-white
       font-bold px-10 py-4 rounded-full text-xl shadow-lg hover:shadow-xl
        hover:bg-gray-500 transition-all duration-200">
     {userStatus ? "Go to Dashboard" : "Go to Home"}
  </Link>
    </div>
  )
}

export default NotFound