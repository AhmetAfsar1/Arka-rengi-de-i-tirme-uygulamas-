let birincirenk=document.querySelector("#renk1");
let ikincirenk=document.querySelector("#renk2");
let renkdegeri=document.querySelector("#alan");
let body=document.querySelector("body");
let buton=document.querySelector("#buton");

alert("Bu siteyi kullanmaya devam ederseniz çerez verilerini kabul etmiş sayılacaksınız");
function fonksiyon()
{
 
    body.style.background="linear-gradient(to right,"+birincirenk.value+","+ikincirenk.value+")";
    alan.innerHTML=body.style.background;
}
window.addEventListener("load",fonksiyon);
birincirenk.addEventListener("input",fonksiyon);
ikincirenk.addEventListener("input",fonksiyon);
function fonksiyon2()
{
    console.log("Butona tıklandı");
}
buton.addEventListener("click",fonksiyon2);
