


export const SetLocalStorage = (email, fullName,phone, username,bankName, accountName, accountNumber, id) => {
   localStorage.setItem("userEmail", JSON.stringify(email))
   localStorage.setItem("userFullName", JSON.stringify(fullName))
   localStorage.setItem("userPhone", JSON.stringify(phone));
  localStorage.setItem("aremxyUserName", JSON.stringify(username))
  localStorage.setItem("userBankName", JSON.stringify(bankName));
  localStorage.setItem("aremxyAccountName", JSON.stringify(accountName))
  localStorage.setItem("aremxyAccountNumber", JSON.stringify(accountNumber));
  localStorage.setItem("aremxyUserId", JSON.stringify(id));

}


export const GetLocalStorage = (ConfirmId, ConfirmAcc, ConfirmBvn) => {
  //Two step  verification flow
const UserEmail = JSON.parse(localStorage.getItem("userEmail"));
 const UserPhone= JSON.parse(localStorage.getItem("userPhone"))
  const  UserFullName = JSON.parse(localStorage.getItem("userFullName"))
 const  aremxyUsername = JSON.parse(localStorage.getItem("aremxyUserName"));
 const aremxyBankName  = JSON.parse(localStorage.getItem("userBankName"));
  const aremxyAccountName = JSON.parse(localStorage.getItem("aremxyAccountName"))
 const aremxyAccountNumber = JSON.parse(localStorage.getItem("aremxyAccountNumber"))
  const aremxyUserId = JSON.parse(localStorage.getItem("aremxyUserId"));
 const idVerification = localStorage.getItem("Qhfde");
 const bvnVerification = localStorage.getItem("Zxfer");
 const userTransactionOtp = localStorage.getItem("uTrO");
   const AccCreated = localStorage.getItem("80pcs");
  if(idVerification && bvnVerification && !AccCreated){
 ConfirmId = localStorage.getItem("Qhfde");
 ConfirmBvn = localStorage.getItem("Zxfer");
 }else if(AccCreated){
ConfirmAcc = localStorage.getItem("80pcs");
ConfirmId = localStorage.getItem("Qhfde");
ConfirmBvn = localStorage.getItem("Zxfer");
  } 
const GetItemsForTwoStep = {
UserEmail, 
  UserPhone, 
  aremxyUsername,
   UserFullName, 
    aremxyBankName, 
    aremxyAccountNumber,
     aremxyAccountName, 
     aremxyUserId,
     ConfirmAcc,
     ConfirmId,
     ConfirmBvn
    }
    const GetItemsForInputPin = {
      UserEmail, 
  UserPhone, 
  aremxyUsername,
   UserFullName, 
    aremxyBankName, 
    aremxyAccountNumber,
     aremxyAccountName, 
     aremxyUserId,
     ConfirmId,
     ConfirmBvn,
     ConfirmAcc
    }
    return userTransactionOtp  ? GetItemsForInputPin : GetItemsForTwoStep
}


export const RemoveLocalStorage = () => {
 localStorage.removeItem("userEmail");
  localStorage.removeItem("userPhone");
  localStorage.removeItem("aremxyUserName");
 localStorage.removeItem("userFullName");
 localStorage.removeItem("userBankName");
 localStorage.removeItem("aremxyAccountName")
 localStorage.removeItem("aremxyAccountNumber");
 localStorage.removeItem("aremxyUserId");
 localStorage.removeItem("cxccxfd");//The UserStatus
 localStorage.removeItem("xcss{}");//The authToken(username)
 localStorage.removeItem("xcss[]")// The authToken (email)
 localStorage.removeItem("Qhfde");//Id Verification
 localStorage.removeItem("Zxfer");//Bvn Verification

 //For Clearing Purposes
 
 localStorage.removeItem("5pbb8");
  localStorage.removeItem("AccCreated");
 localStorage.removeItem("UserStatus");
 localStorage.removeItem("getToken");
 localStorage.removeItem("authorisedLogin")
 //
 localStorage.removeItem("ReferralLink");
 localStorage.removeItem("ReferralCode");
 localStorage?.removeItem("aremxyPassword");
localStorage?.removeItem("aremxyUsername");
localStorage.removeItem("UserIcon");
  localStorage?.removeItem("3232");    
     localStorage?.removeItem("SessionExpiration");
     localStorage?.removeItem("PasswordResetActive");
     localStorage.removeItem("xcss{}");
 const AccCreated = localStorage.getItem("80pcs")
 const usernameToken = localStorage.getItem("xcss{}");
 if(usernameToken){
   
   const userTransactionOtp = localStorage.getItem("uTrO")
  if(userTransactionOtp){
    localStorage.removeItem("uTrO")
 }
 if(AccCreated){
  localStorage.removeItem("80pcs")
 }
 }
 else {

 const userTransactionOtp = localStorage.getItem("uTrO")
 if(userTransactionOtp){
  localStorage.removeItem("uTrO")
}
 if(AccCreated){
  localStorage.removeItem("80pcs")
 }
 }
}
