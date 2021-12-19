
// Запрет на копирование текста
// document.ondragstart = noselect;
// document.onselectstart = noselect;
// document.oncontextmenu = noselect;
// function noselect() {return false;}


// Корзина

document.querySelector(".item1").addEventListener("click", showresult);

function showresult() {
  let n1=parseFloat(document.getElementById("num1").value);
  let n2=parseFloat(document.getElementById("num2").value);
  let result = n1*n2;
  document.getElementById("result").innerHTML=result;
  // alert("I got clicked");
}
