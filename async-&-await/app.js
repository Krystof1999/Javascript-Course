// async function myFunction() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("hello"), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunction()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Get (json) data from response
  const data = await response.json();

  return data;
}

getUsers().then((users) => console.log(users));
