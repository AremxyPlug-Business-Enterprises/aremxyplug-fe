import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../../../Context";
import { Modal } from "../../../../Screens/Modal/Modal";
import styles from "../../TransferComponent/transfer.module.css";

export const DeleteSuccessfulPopUp = () => {
  const { isDarkMode, deleteSuccess, setDeleteSuccess, toggleSideBar } =
    useContext(ContextProvider);
  return (
    <div>
      {" "}
      {deleteSuccess && (
        <Modal>
          <div
            className={`${styles.deleteSuccess} ${
              toggleSideBar ? " lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
            } w-[90%] md:w-[80%] lg:h-[465px]`}
          >
            <img
              className="m-2 w-[19.9px] h-[11.81px] lg:w-[41px] lg:h-[25px]"
              src="/Images/addAccountImages/aremxyAddLogo.png"
              alt="/"
            />
            <hr className="h-[6px] bg-[#04177f] border-none lg:h-[22px]" />
            <div className="my-[3%] flex flex-col justify-between h-[70%]">
              <div className="text-center">
                <p className="text-[11px] font-extrabold md:text-[16px] lg:text-[16px]">
                  Successful
                </p>
                <p className="text-[10px] font-extrabold text-[#04177f] w-[80%] mx-auto md:text-[16px] lg:text-[16px]">
                  Your Account has been deleted successfully. You can add your
                  account again anytime!
                </p>
              </div>
              <img
                className="w-[60px] h-[60px] mx-auto mb-[2%] md:w-[70px] md:h-[70px] lg:w-[150px] lg:h-[150px]"
                src="./Gif/checkMarkGif.gif"
                alt="/"
              />
              <Link to="/to-my-account">
                {" "}
                <div
                  onClick={() => setDeleteSuccess(false)}
                  className={` ${
                    isDarkMode ? "border" : "bg-[#04177f] "
                  } mx-auto cursor-pointer text-white text-[12px] h-[35px] w-[80%] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:text-[16px] md:h-[50px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[163px] lg:mx-auto`}
                >
                  Done
                </div>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
