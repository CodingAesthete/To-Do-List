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
  content.innerHTML = '';

  arr.forEach(function (element, index) {
    let activity = `<div>${element.activity}</div>`;
    let date = `<div>${element.date}</div>`;

    let deleteBtn = `<div><button  class="delete-btn">Delete</button></div>`;

    content.innerHTML += activity;
    content.innerHTML += date;
    content.innerHTML += deleteBtn;

    document.querySelectorAll('.delete-btn')
      .forEach(function (deleteBtn, index) {
        deleteBtn.addEventListener('click', function () {
          arr.splice(index, 1);
          createContent();
        })

      });

  });
}