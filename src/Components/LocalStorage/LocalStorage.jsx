


export const SetLocalStorage = (email, fullName,phone, username,bankName, accountName, accountNumber, id) => {

   localStorage.setItem("userEmail", JSON.stringify(email))
   localStorage.setItem("userFullName", JSON.stringify(fullName))
   localStorage.setItem("userPhone", JSON.stringify(phone));
  localStorage.setItem("aremxyUserName", JSON.stringify(username))
  localStorage.setItem("userBankName", JSON.stringify(bankName));
  localStorage.setItem("aremxyAccountName", JSON.stringify(accountName))
  localStorage.setItem("aremxyAccountNumber", JSON.stringify(accountNumber));
  localStorage.setItem("aremxyUserId", JSON.stringify(id))
}


export const GetLocalStorage = (ConfirmId, ConfirmAcc, ConfirmBvn) => {
const UserEmail = JSON.parse(localStorage.getItem("userEmail"));
 const UserPhone= JSON.parse(localStorage.getItem("userPhone"))
  const  UserFullName = JSON.parse(localStorage.getItem("userFullName"))
 const  aremxyUsername = JSON.parse(localStorage.getItem("aremxyUserName"))
 const aremxyBankName  = JSON.parse(localStorage.getItem("userBankName"));
  const aremxyAccountName = JSON.parse(localStorage.getItem("aremxyAccountName"))
 const aremxyAccountNumber = JSON.parse(localStorage.getItem("aremxyAccountNumber"))
  const aremxyUserId = JSON.parse(localStorage.getItem("aremxyUserId"));
 const idVerification = localStorage.getItem("idVerification");
 const bvnVerification = localStorage.getItem("bvnVerification");
   const AccCreated =localStorage.getItem("AccCreated");
  if(idVerification && bvnVerification && !AccCreated){
 ConfirmId = localStorage.getItem("idVerification");
 ConfirmBvn = localStorage.getItem("bvnVerification");
  
  }else if(AccCreated){
ConfirmAcc = localStorage.getItem("AccCreated")
ConfirmId =localStorage.getItem("idVerification");
ConfirmBvn = localStorage.getItem("bvnVerification");
  } 
return {UserEmail, 
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
 localStorage.removeItem("UserStatus");
 localStorage.removeItem("idVerification");
//  localStorage.removeItem("bvnVerification");
 const AccCreated = localStorage.getItem("AccCreated")
 const getToken = localStorage.getItem("getToken");
 if(getToken){
 localStorage.removeItem("getToken");
 if(AccCreated){
  localStorage.removeItem("AccCreated")
 }
 }
 else {
 localStorage.removeItem("authorisedLogin");
 if(AccCreated){
  localStorage.removeItem("AccCreated")
 }
 }
}
