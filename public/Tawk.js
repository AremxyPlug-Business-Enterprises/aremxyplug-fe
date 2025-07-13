const TawkWidget = ()=> {
if(!navigator.onLine)return alert("Check your internet connection then reload to get customer support widget.");
if(navigator.onLine){
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//Prevent loading or adding of script when one already exists
if(document.getElementById("tawk-widget")) return;
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6835c1f51efcb01913c5b9df/1is8vra89';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s1.id ="tawk-widget";
s1.onload = function(){
    if(!navigator.onLine) return alert("Check internet connection")
};
s0.parentNode.insertBefore(s1,s0);
})();
}

}
 TawkWidget()