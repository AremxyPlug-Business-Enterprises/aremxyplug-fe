import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import { Modal } from "../../../../Screens/Modal/Modal";
import styles from "../../TransferComponent/transfer.module.css";

export const DeleteAccountPopUp = () => {
  const { toggleSideBar, deletePopUp, setDeletePopUp, setDeleteSuccess } =
    useContext(ContextProvider);

  const handleDeletePopUp = () => {
    setDeletePopUp(false);
    setDeleteSuccess(true);
  };
  return (
    <div>
      {" "}
      {deletePopUp && (
        <Modal>
          <div
            className={`${styles.deletePopUp} ${
              toggleSideBar ? "lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%] "
            } md:w-[70%] w-[90%] `}
          >
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />

            <p className="text-[9px] md:text-[16px] font-extrabold text-center my-[5%] lg:my-[5%]">
              Are you sure you want to delete this account ?
            </p>
            <img
              className="my-[10%] mx-auto w-[60px] h-[60px] md:w-[85px] md:h-[85px] lg:my-[10%] lg:w-[150px] lg:h-[150px]"
              src="/Images/transferImages/user-icon.png"
              alt=""
            />
            <div className="flex gap-8 mt-[5%] justify-center lg:gap-5 lg:w-[100%]">
              <button
                onClick={handleDeletePopUp}
                className="cursor-pointer text-[12px] font-extrabold h-[50px] bg-[#04177f] text-white w-[111px] rounded-[6px] md:rounded-[8px] md:text-[20px] lg:w-[163px] lg:h-[38px]"
              >
                Yes
              </button>
              <button
                onClick={() => {}}
                className="cursor-pointer text-[#F95252] text-[14px] w-[111px] rounded-[6px] font-extrabold md:text-[20px] lg:text-[20px] lg:w-[163px] lg:h-[38px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
