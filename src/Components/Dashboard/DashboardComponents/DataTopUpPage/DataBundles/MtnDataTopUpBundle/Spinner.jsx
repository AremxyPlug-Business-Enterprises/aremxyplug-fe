import React from "react";

// const Spinner = () => {
//   return (
//     <div
//       className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         zIndex: 50
//       }}
//     >
//       <div
//         className="relative rounded-full w-14 h-14 animate-spin"
//         style={{
//           border: "4px solid transparent",
//           borderTopColor: "#ccc",
//           borderRadius: "50%",
//           width: "3.5rem",
//           height: "3.5rem",
//           animation: "spin 1s linear infinite"
//         }}
//       >
//         {/* <div className="absolute w-[0.3rem] h-[0.3rem] top-1 bg-gray-950 rounded-full"></div> */}
//       </div>

//       <style>
//         {`
//           @keyframes spin {
//             to {
//               transform: rotate(360deg);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Spinner;

const Spinner = ({ size = "small" }) => {
  const height = () => {
    switch (size) {
      case "large":
        return "h-8 md:h-14";
      case "small":
        return "h-4 md:h-8";
      default:
        return "h-6";
    }
  };
  const width = () => {
    switch (size) {
      case "large":
        return "w-8 md:w-14";
      case "small":
        return "w-4 md:w-8";
      default:
        return "w-6";
    }
  };
  const borderTop = size === "small" ? "border-t-2" : "border-t-4";

  return (
    <div
      className={`${height()} ${width()} border ${borderTop} border-green-300 border-solid rounded-full animate-spin`}
    ></div>
  );
};

export default Spinner;
