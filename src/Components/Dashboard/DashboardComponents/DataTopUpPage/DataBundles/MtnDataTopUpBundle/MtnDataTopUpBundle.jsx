// import React from "react";
// import { useState } from "react";
// // import styles from '../../MtnDataTopUp.module.css'
// import { DashBoardLayout } from "../../../../Layout/DashBoardLayout";
// import { ContextProvider } from "../../../../../Context";
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import Select from "../DataBundles-Images/Select.svg";
// import DataBundle from "../DataBundles-Images/DataBundles.svg";
// import Recipient from "../DataBundles-Images/Recipient.svg";
// import Recipient2 from "../DataBundles-Images/Recipient2.svg";
// import DataBalance from "../DataBundles-Images/DataBalance.svg";
// import DataBalance2 from "../DataBundles-Images/DataBalance2.svg";
// import MtnLogo from "..//MtnDataTopUpBundle/MtnDataTopUpBundleImages/MtnLogo.svg";
// import arrowDown from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/ArrowDown.svg";
// import PhoneNumber from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/PhoneNumber.svg";
// import Recipient3 from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Recipient.svg";
// import Amount from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Amount.svg";
// import Flag from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/NaijaFlag.svg";

// const MtnDataTopUpBundle = () => {
//   const { isDarkMode } = useContext(ContextProvider);

//   const [addRecipient, setAddRecipient] = useState(false);
//   const [proceed, setProceed] = useState(false);
//   const [paymentSelected, setPaymentSelected] = useState(false);
//   const [amount, setAmount] = useState("");
//   const [showPayment, setShowPayment] = useState(false);
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [paymentAmount, setPaymentAmount] = useState("");
//   const [recipientName, setRecipientName] = useState("");
//   const [recipientNumber, setRecipientNumber] = useState("");
//   const [confirm, setConfirm] = useState(false);

//   if (addRecipient) {
//     console.log("recipient added");
//   } else {
//     console.log("did not add recipient");
//   }

//   const countryList = [
//     {
//       id: 1,
//       name: "Nigeria",
//       code: "NGN",
//       amount: 50000,
//     },
//     {
//       id: 2,
//       name: "United States",
//       code: "USD",
//       amount: 0,
//     },
//     {
//       id: 3,
//       name: "United Kingdom",
//       code: "GBP",
//       amount: 0,
//     },
//     {
//       id: 4,
//       name: "European Union",
//       code: "EUR",
//       amount: 0,
//     },
//     {
//       id: 5,
//       name: "Australia",
//       code: "AUD",
//       amount: 0,
//     },
//     {
//       id: 6,
//       name: "Kenya",
//       code: "KSH",
//       amount: 0,
//     },
//   ];

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showProduct, setShowProduct] = useState(false);
//   const [selectedNetwork, setSelectedNetwork] = useState(null);

//   // const productList = [
//   // 'MTN SME',
//   // 'MTN SME2',
//   // 'MTN CG',
//   // 'MTN GIFTING',
//   // 'MTN DIRECT COUPON',
//   // 'GENERAL BUNDLES ---'];

//   const productList = {
//     "MTN SME": [
//       "MTN SME 500MB (₦100) ~ 1 MONTH",
//       "MTN SME 1GB (₦100) ~ 1 MONTH",
//       "MTN SME 2GB (₦100) ~ 1 MONTH",
//       "MTN SME 3GB (₦100) ~ 1 MONTH",
//       "MTN SME 4GB (₦100) ~ 1 MONTH",
//       "MTN SME 5GB (₦100) ~ 1 MONTH",
//       "MTN SME 10GB (₦100) ~ 1 MONTH",
//     ],
//   };

//   const handleSelectProduct = (product) => {
//     setSelectedProduct(product);
//     setSelectedNetwork(product); // Automatically set the selected product as the selected network
//     setShowProduct(false); // Hide the product list after selection (you can change this behavior if needed)
//   };

//   const handleShowProduct = () => {
//     setShowProduct(!showProduct);
//   };

//   const handleSelectNetwork = (network) => {
//     setSelectedNetwork(network);
//     setShowNetworkOptions(false);
//   };

//   const Payment = ({ code, amount, onClick }) => {
//     return (
//       <li
//         className="pl-[4px] lg:pl-[14px] lg:pr-[16px] border-b flex items-center py-[3px] gap-1 last:border-b-0 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]"
//         onClick={onClick}
//       >
//         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
//           {code}
//         </h2>
//         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
//           Wallet({amount.toLocaleString()}.00)
//         </h2>
//       </li>
//     );
//   };

//   const Product = ({ onClick, product }) => {
//     return (
//       <li
//         className="pl-[4px] lg:pl-[14px] lg:pr-[16px] border-b flex items-center py-[3px] gap-1 last:border-b-0 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]"
//         onClick={onClick}
//       >
//         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
//           {product}
//         </h2>
//       </li>
//     );
//   };

//   const handleSelectPayment = (code, flag, amount) => {
//     setName(code);
//     setImage(flag);
//     setPaymentAmount(amount);
//     setShowPayment(false);
//     setPaymentSelected(true);
//   };

//   // const handleSelectProduct =(val) => {
//   //   setSelectedProduct(val);
//   //   setShowProduct(false);
//   // }

//   // const handleShowProduct =() => {
//   //   setShowProduct(!showProduct);
//   //   setSelectedProduct(false);
//   // }

//   const handleShowPayment = () => {
//     setShowPayment(!showPayment);
//     setName("");
//     setPaymentAmount("");
//     setPaymentSelected(false);
//   };

//   const handleProceed = () => {
//     setProceed(true);
//   };

//   const factorWalletName = (value) => {
//     if (value === "NGN") {
//       return "Nigerian NGN Wallet";
//     }

//     if (value === "GBP") {
//       return "British GBP Wallet";
//     }

//     if (value === "USD") {
//       return "American USD Wallet";
//     }

//     if (value === "AUD") {
//       return "Australian AUD Wallet";
//     }

//     if (value === "KSH") {
//       return "Kenyan KSH Wallet";
//     }

//     if (value === "EUR") {
//       return "European EUR Wallet";
//     }
//   };

//   const handleConfirm = () => {
//     setProceed(false);
//     setConfirm(true);
//   };

//   console.log(confirm);

//   console.log(recipientName, selectedProduct, recipientNumber, name, image);

//   return (
//     <DashBoardLayout>
//       <div
//         className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${
//           isDarkMode
//             ? "bg-[#000] text-[#fff] border-[#fff]"
//             : "bg-[#ffffff] text-[#000] "
//         } flex flex-col justify-between h-full`}
//       >
//         <section
//           className={`md:px-[0px] ${
//             isDarkMode
//               ? "bg-[#000] text-[#fff] border-[#fff]"
//               : "bg-[#ffffff] text-[#000] "
//           } `}
//         >
//           <div
//             id="DataBundle"
//             className="w-full h-[90px] gap-[5px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
//           >
//             <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
//               <p className="text-[10px] mb-2 font-bold uppercase w-[100%] md:text-[16px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
//                 DATA BUNDLES, AFFORDABLE AND AUTOMATED.
//               </p>
//               <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[10px] md:leading-[12.2px] w-[90%] md:w-[75%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
//                 Top up your mobile sim with our automated data bundles directly
//                 from network providers, enjoy discounts without any hassle or
//                 hidden fee.
//               </p>
//             </div>

//             <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
//               <img
//                 src={DataBundle}
//                 alt=""
//                 className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
//               />
//             </div>
//           </div>

//           {/* =========================Select/Add Recipient===================== */}
//           <div className="flex gap-[10%] md:gap-[8%] lg:gap-[7%] mt-[40px] lg:mt-[60px]">
//             <div className="w-full flex items-center justify-between border text-[10px] md:w-[117%] lg:w-[132.5%] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
//               <p className="font-extrabold">Select Recipient</p>
//               <img
//                 className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
//                 src={Recipient}
//                 alt=""
//               />
//             </div>
//             <div className="w-full flex items-center justify-between border text-[10px] md:mr-[50px] lg:mr-[150px] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
//               <p className="font-extrabold">Add Recipient</p>
//               <img
//                 className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
//                 src={Recipient2}
//                 alt=""
//               />
//             </div>
//           </div>

//           <div className="flex mt-[35px] md:gap-[58.68px] lg:gap-[100px] lg:mt-[60px] my-[30px]">
//             <div className="rounded-[4px] w-full bg-primary text-white md:w-[50%] h-[30px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-center md:justify-between gap-[10px] px-[5px]">
//               <h2 className="lg:text-[16px] lg:leading-[24px] text-[10px] md:text-[12px] leading-[12px]">
//                 Data Balance USSD Codes
//               </h2>
//               <div className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
//                 <img
//                   src={DataBalance}
//                   alt=""
//                   className="w-full h-full md:hidden"
//                 />
//                 <img
//                   src={DataBalance2}
//                   alt=""
//                   className="w-full h-full hidden md:block"
//                 />
//               </div>
//             </div>
//             <div className="hidden md:w-1/2 md:block"></div>
//           </div>

//           <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
//             <p className="text-[#7c7c7c] text-[10px] leading-[130%] md:text-[18px] lg:text-[20px] 2xl:text-[28px]">
//               Select Network Type
//             </p>
//             <img
//               src={Select}
//               alt=""
//               className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
//             />
//           </div>

//           <div className="flex gap-[15px]">
//             <p className="flex text-[#7c7c7c] gap-[7px] text-[10px] leading-[130%] md:text-[18px] lg:text-[20px] 2xl:text-[28px]">
//               Purchase
//               <span>
//                 <img src={MtnLogo} alt="" />
//               </span>{" "}
//               MTN Data Instantly
//             </p>
//             <img src={Select} alt="" />
//           </div>

//           {/* =========================PRODUCTS============================== */}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[58.68px] lg:gap-x-[100px] md:gap-y-[15px] lg:gap-y-[25px] pb-[30px] lg:py-[60px]">
//             <div>
//               <h2 className="lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]">
//                 Select Product
//               </h2>
//               <div className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
//                 <h2 className="text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]">
//                   {selectedProduct ? selectedProduct : "Select Product"}
//                 </h2>
//                 <button
//                   className="lg:w-6 lg:h-6 w-[11px] h-[11px]"
//                   onClick={handleShowProduct}
//                 >
//                   <img src={arrowDown} alt="" className="w-full h-full" />
//                 </button>
//               </div>
//               {showProduct && (
//                 <div className="border md:rounded-[10px] lg:mt-2 mt-1 rounded-[4px]">
//                   {Object.keys(productList).map((product, index) => (
//                     <div key={index}>
//                       <button onClick={() => handleSelectProduct(product)}>
//                         {product}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div>
//               <h2 className="lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]">
//                 Select Network
//               </h2>
//               <div className="border w-full rounded-[4px] h-[30px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
//                 <h2 className="text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]">
//                   {selectedNetwork ? selectedNetwork : "Select Network"}
//                 </h2>
//                 <div className="lg:w-6 lg:h-6 h-[11px] w-[11px]">
//                   <img src={arrowDown} alt="" className="w-full h-full" />
//                 </div>
//               </div>
//               {selectedProduct && (
//           <div className='border md:rounded-[10px] lg:mt-2 mt-1 rounded-[4px]' style={{ display: showNetworkOptions ? 'block' : 'none' }}>
//             {productList[selectedProduct].map((network, index) => (
//               <div key={index}>
//                 <button onClick={() => handleSelectNetwork(network)}>{network}</button>
//               </div>
//             ))}
//           </div>
//         )}
//             </div>
//             <div>
//               <h2 className="lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]">
//                 Phone Number{" "}
//                 <span className="text-[8px] leading-[12px] md:text-[10px] md:leading-[15px]">
//                   (Select Recipient)
//                 </span>
//               </h2>
//               <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
//                 <input
//                   type="text"
//                   className="lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] leading-[12px]"
//                   placeholder="Add recipient phone number"
//                   onChange={(event) => setRecipientNumber(event.target.value)}
//                   value={recipientNumber}
//                 />
//                 <div className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
//                   <img src={PhoneNumber} alt="" className="w-full h-full" />
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]">
//                 Recipient Name{" "}
//                 <span className="md:text-[10px] text-[8px]">(Optional)</span>
//               </h2>
//               <div className="border rounded-[4px] pl-[4px] pr-[8px] w-full h-[30px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
//                 <input
//                   type="text"
//                   className="text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px] grow outline-none"
//                   placeholder="Add recipient name"
//                   onChange={(event) => setRecipientName(event.target.value)}
//                   value={recipientName}
//                 />
//                 <div className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
//                   <img src={Recipient3} alt="" className="w-full h-full" />
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]">
//                 Type Amount
//               </h2>
//               <div className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
//                 <input
//                   type="text"
//                   placeholder="Type amount"
//                   className="lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] leading-[12px]"
//                   onChange={(event) => setAmount(event.target.value)}
//                   value={amount.toLocaleString()}
//                 />
//                 <div className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
//                   <img src={Amount} alt="" className="w-full h-full" />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div>
//                 <h2 className="lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]">
//                   Payment Method
//                 </h2>
//                 <div className="border rounded-[4px] pl-[4px] pr-[8px] w-full h-[30px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
//                   {paymentSelected ? (
//                     <li className="flex items-center py-[3px] gap-1 h-[30px] last:border-b-0 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]">
//                       <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
//                         {name}
//                       </h2>
//                       <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
//                         Wallet({paymentAmount.toLocaleString()}.00)
//                       </h2>
//                     </li>
//                   ) : (
//                     <h2 className="lg:text-[16px] lg:leading-[24px] text-[8px] leading-[12px]">
//                       Select Payment Method
//                     </h2>
//                   )}
//                   {paymentSelected ? (
//                     <button
//                       className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
//                       onClick={handleShowPayment}
//                     >
//                       <img
//                         src={image}
//                         alt=""
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ) : (
//                     <button
//                       className="lg:w-6 lg:h-6 h-[11px] w-[11px]"
//                       onClick={handleShowPayment}
//                     >
//                       <img src={arrowDown} alt="" className="w-full h-full" />
//                     </button>
//                   )}
//                 </div>
//               </div>
//               {showPayment && (
//                 <div className="border md:rounded-[10px] lg:mt-2 mt-1 rounded-[4px]">
//                   {countryList.map((country) => (
//                     <Payment
//                       key={country.id}
//                       code={country.code}
//                       amount={country.amount}
//                       onClick={() =>
//                         handleSelectPayment(country.code, country.amount)
//                       }
//                     />
//                   ))}
//                   <div className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
//                     <img src={Flag} alt="" className="w-full h-full" />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <h2 className="text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]">
//               Add to Recipient?
//             </h2>
//             <div
//               onClick={() => setAddRecipient(!addRecipient)}
//               className={` w-[15px] h-[6.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded 
//                     ${addRecipient ? "bg-[#77ff60]" : "bg-[#b1b0b0]"}`}
//             >
//               <div
//                 className={`rounded-full w-[7.5px] h-[6.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] 
//                     ${addRecipient ? "float-right" : "float-left"}`}
//               ></div>
//             </div>
//           </div>
//           {/* { proceed && 
//                 <div className='fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center'>
//                     <div className={` mx-[5%] ${ isDarkMode ? "border bg-[#000]" : "bg-[#fff]"} lg:ml-[25%] lg:mr-[10%] md:mx-[25%] grow pt-[20px] pb-[20px] rounded-[8px] relative md:rounded-[11.5px]`}>
//                         <div className='w-full flex justify-end border-b-[6px] border-primary px-[12px]'>
//                             <button onClick={()=> setProceed(false)} className='lg:w-6 lg:h-6 h-[11px] w-[11px] rounded-full border flex items-center justify-center'>
//                                 x
//                             </button>
//                         </div>
//                         <div className='p-[15px] px-[12px]'>
//                             <h2 className='lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[8px] leading-[12px]'>Confirm Transaction</h2>
//                             <h2 className='lg:text-[16px] lg:leading-[24px] text-[8px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px]'>You are about to purchase {selectedProduct + ' ' + SelectedNetwork} from your {} Wallet to</h2>
//                             <div className="flex flex-col gap-[20px]">
//                                 <div className='flex items-center justify-between'>
//                                     <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Network</h2>
//                                     <div className='flex gap-1'>
//                                         <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
//                                             <img src={networkImage} alt="" className='w-full h-full object-cover'/>
//                                         </div> 
//                                         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
//                                     </div>
//                                 </div>
//                                 <div className='flex items-center justify-between'>
//                                     <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Product</h2>
//                                     <div className='flex gap-1'> 
//                                         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName + ' ' + selectedProduct}</h2>
//                                     </div>
//                                 </div>
//                                 <div className='flex items-center justify-between'>
//                                     <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Discount</h2>
//                                     <div className='flex gap-1'> 
//                                         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{discount}%</h2>
//                                     </div>
//                                 </div>
//                                 <div className='flex items-center justify-between'>
//                                     <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Phone Number</h2>
//                                     <div className='flex gap-1'> 
//                                         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{recipientNumber}</h2>
//                                     </div>
//                                 </div>
//                                 <div className='flex items-center justify-between'>
//                                     <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Recipient Name</h2>
//                                     <div className='flex gap-1'> 
//                                         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{recipientName}</h2>
//                                     </div>
//                                 </div>
//                                 <div className='flex items-center justify-between'>
//                                     <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Payment Method</h2>
//                                     <div className='flex gap-1'> 
//                                         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{factorWalletName(name)}</h2>
//                                     </div>
//                                 </div>
                      
//                                 <div className='flex items-center justify-between'>
//                                     <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Transaction Fee</h2>
//                                     <div className='flex gap-1'> 
//                                         <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name + ' ' + tFee}.00</h2>
//                                     </div>
//                                 </div>
//                                 <div className='flex items-center justify-between'>
//                                     <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Points Earned</h2>
//                                     <div className='flex gap-1'> 
//                                         <h2 className="text-[#2ED173] text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{points}</h2>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='my-[60px] flex items-center gap-2 bg-slate-200 -mx-[12px] px-[12px] h-[59px]'>
//                                 <div className='w-[41px] h-[41px] rounded-full overflow-hidden p-2 bg-white'>
//                                     <img src={image} alt="" className='w-full h-full object-cover rounded-full'/>
//                                 </div>
//                                 <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Available Balance ( {name+paymentAmount}.00 )</h2>
//                             </div>
//                             <div className='flex items-center justify-center'>
//                                 <button className='w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[6px]' onClick={handleConfirm}>Confirm</button> 
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             } */}
//           {/* {
//                 confirm && 
//                     <div className='fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center'>
//                         <div className={` mx-[5%] ${ isDarkMode ? "border bg-[#000]" : "bg-[#fff]"} lg:ml-[25%] lg:mr-[10%] md:mx-[25%] grow pt-[20px] pb-[20px] rounded-[8px] relative md:rounded-[11.5px]`}>
//                             confirmation
//                             <button onClick={() =>setConfirm(false)}>close</button>
//                         </div>
//                     </div>
//             } */}
//           <div className="py-[30px] lg:py-[60px] mt-10">
//             <button
//               className="w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[6px]"
//               onClick={handleProceed}
//             >
//               Proceed
//             </button>
//           </div>

//           <div className="flex gap-2 justify-center items-center md:mt-40">
//             <h2 className="text-[8px] leading-[12px] lg:text-[12px]">
//               You need help?
//             </h2>
//             ''
//             <Link
//               to={`/ContactUs`}
//               className="text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </section>
//       </div>
//     </DashBoardLayout>
//   );
// };

// export default MtnDataTopUpBundle;
