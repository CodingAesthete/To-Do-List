let arr = [];
let content = document.querySelector('.content');

document.querySelector('.add-btn').addEventListener('click', function () {
  const activity = document.querySelector('.activity').value;
  const date = document.querySelector('.date').value;
  arr.push({
    activity,
    date
  });
  document.querySelector('.activity').value = '';
  document.querySelector('.date').value = '';
  createContent();
});

function createContent() {
  content.innerHTML='';

  for (let i = 0; i < arr.length; i++) {
  let activity= `<div>${arr[i].activity}</div>`;
  let date= `<div>${arr[i].date}</div>`;

  let deleteBtn=`<div><button  class="delete-btn" onclick="
   arr.splice(${i},1);
   createContent();
   ">
   Delete
   </button></div>`;

   content.innerHTML+=activity;
   content.innerHTML+=date;
   content.innerHTML+=deleteBtn;
  }
  
}