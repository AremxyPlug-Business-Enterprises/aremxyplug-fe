


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


export const GetLocalStorage = () => {
const UserEmail = JSON.parse(localStorage.getItem("userEmail"));
 const UserPhone= JSON.parse(localStorage.getItem("userPhone"))
  const  UserFullName = JSON.parse(localStorage.getItem("userFullName"))
 const  aremxyUsername = JSON.parse(localStorage.getItem("aremxyUserName"))
 const aremxyBankName  = JSON.parse(localStorage.getItem("userBankName"));
  const aremxyAccountName = JSON.parse(localStorage.getItem("aremxyAccountName"))
 const aremxyAccountNumber = JSON.parse(localStorage.getItem("aremxyAccountNumber"))
  const aremxyUserId = JSON.parse(localStorage.getItem("aremxyUserId"))
return {UserEmail, UserPhone, aremxyUsername, UserFullName, aremxyBankName, aremxyAccountNumber, aremxyAccountName, aremxyUserId}
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
 const getToken = localStorage.getItem("getToken");
 if(getToken){
 localStorage.removeItem("getToken");
 }
 else {
 localStorage.removeItem("authorisedLogin");
 }
}
