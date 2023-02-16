// EVENT BUBBLING

document.querySelector(".card-title").addEventListener("click", function () {
  console.log("card title");
});

// Parent
document.querySelector(".card-content").addEventListener("click", function () {
  console.log("card content");
});

// Parent
document.querySelector(".card").addEventListener("click", function () {
  console.log("card");
});

// Parent
document.querySelector(".col").addEventListener("click", function () {
  console.log("col");
});

// EVENT DELEGATION - oposit - from parent to child

// const delteItem = document.querySelector('.delete-item')

// delteItem.addEventListener('click', deleteItem)

// Parent

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  console.log(e.target);
  // if (e.target.parentElement.className === "delete-item secondary-content") {
  //   console.log("delete item");
  // }

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");

    e.target.parentElement.parentElement.remove(); // this will delete task
  }
}
