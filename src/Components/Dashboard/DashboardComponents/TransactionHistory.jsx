import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import styles from "./component.module.css";

const TransactionHistory = () => {
  const { isDarkMode } = useContext(ContextProvider);
  return (
    <>
      {/* ======Mobile View==== */}
      <div
        className="text-[12px] p-4"
        style={{
          boxShadow: "0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.45)",
        }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#97E8B9] text-white p-1">Successful</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              Status :{" "}
              <span className="bg-[#FB9393] text-white p-1">Failed</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#92ABFE] text-white p-1">Refunded</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#97E8B9] text-white p-1">Successful</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              Status :{" "}
              <span className="bg-[#FB9393] text-white p-1">Failed</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#97E8B9] text-white p-1">Successful</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#92ABFE] text-white p-1">Refunded</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#FFD98F] text-white p-1">Pending</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#FFD98F] text-white p-1">Pending</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-[15px] my-[5%] justify-center items-center">
          <div className="text-[8px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                styles.contactus
              }`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;

// #97E8B9
// #FFD98F
// #FB9393
// #92ABFE
