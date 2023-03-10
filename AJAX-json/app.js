document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "data.txt", true); // true - bude to synchronni

  // console.log("READYSTATE", xhr.readyState);

  // Optional - Used for spiners/loaders
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState); // 3
  };
}

xhr.onload = function () {
  if (this.status === 200) {
    // console.log(this.responseText);
    document.getElementById(
      "output"
    ).innerHTML = `<h1>${this.responseText}</h1>`;
  }
  console.log("READYSTATE", xhr.readyState); // 4
};

// xhr.onreadystatechange = function () {
//   console.log("READYSTATE", xhr.readyState);
//   if (this.status === 200 && this.readyState === 4) {
//     console.log(this.responseText);
//   }
// };

xhr.onerror = function () {
  console.log("Request error");
};

xhr.send();
// }

// readyState Values
// 0: reqest not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: reqest finished and response is ready
