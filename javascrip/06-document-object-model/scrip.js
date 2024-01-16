// We also have methods to select elements more directly
// document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';


const title =document.querySelectorAll('title');
title.classList.add('dark');

// console.log(h1List);
// h1List[0].innerText="Day là h1 dau";
// h1List[1].innerText="Day là h1 2";


//document.creatElement
const newEle=document.createElement('div');
newEle.innerHTML ="Day là con tôi đnag hoc mau giao";
const idMain=document.getElementById('main');

console.log(idMain);
idMain.appendChild(newEle);
