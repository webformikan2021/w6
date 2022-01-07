// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
console.log(myHeading);//追加
function setUserName() {
  let myName = prompt('名前を入力してください');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '今日は' + myName +'さん ';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '今日は' + storedName + 'さん '; 
}

myButton.onclick = function() {
  setUserName();
}
