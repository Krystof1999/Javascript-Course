document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api.icndb.com/jokes/random/3", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = this.responseText;
      console.log(response);
    }
  };

  xhr.send();
  e.preventDefault();
}
