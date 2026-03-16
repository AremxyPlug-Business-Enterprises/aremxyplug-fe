export const UserBgFormatting = (UserData)=> {
  const alphabetsName = "abcdefghijklmnopqrstuvwxyz".split("");
  
  const Username =  UserData !== null && UserData !== undefined ? UserData?.toString()?.toLowerCase()  : "";
const firstCharacter = Username?.charAt(0);
const alphabetPlacementIndex = alphabetsName?.indexOf(firstCharacter);
let assignBgByUsername ;//default Value/ Image
if(alphabetPlacementIndex >= 0 && alphabetPlacementIndex < 3){
   assignBgByUsername = "bg-[#228be6] bg-opacity-10 p-5 rounded-full"
}else if(alphabetPlacementIndex >= 3 && alphabetPlacementIndex < 6){
  assignBgByUsername = "bg-[#40c057] bg-opacity-10 p-5 rounded-full"
}else if(alphabetPlacementIndex >= 6 && alphabetPlacementIndex < 9){
  assignBgByUsername ="bg-[#fab005]  bg-opacity-19 p-5 rounded-full" 
}else if(alphabetPlacementIndex >= 9 && alphabetPlacementIndex < 12){
  assignBgByUsername = "bg-[#fa5252]  bg-opacity-10 p-5 rounded-full";
}else if(alphabetPlacementIndex >=12 && alphabetPlacementIndex < 15){
assignBgByUsername ="bg-[#7850f2]  bg-opacity-10 p-5 rounded-full"
}else if(alphabetPlacementIndex >= 15  && alphabetPlacementIndex < 18){
  assignBgByUsername =  "bg-[#e70f0f]  bg-opacity-10 p-5 rounded-full"
}else if(alphabetPlacementIndex >= 18 && alphabetPlacementIndex < 21){
  assignBgByUsername ="bg-[#804a4a]  bg-opacity-10 p-5 rounded-full"
}else if(alphabetPlacementIndex >= 21 && alphabetPlacementIndex < 24){
  assignBgByUsername ="bg-[#804a4a]  bg-opacity-10 p-5 rounded-full"
}else if(alphabetPlacementIndex >=  24 && alphabetPlacementIndex <= 27){
    assignBgByUsername =" bg-opacity-10  p-5 rounded-full"
}else {
  assignBgByUsername ="bg-[#228be6] bg-opacity-10 p-5 rounded-full"
}

return assignBgByUsername 
} 