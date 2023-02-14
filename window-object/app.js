// WINDOW METHODS / OBJECTS / PROPERTIES

// ALERT
alert("hello");

// PROMPT - takes and input (input field)
const input = prompt();

alert(input);

// CONFIRM
if (confirm("Are you sure?")) {
  console.log("YES");
} else {
  console.log("NO");
}

//

let val;

// Outer height and width
val = window.outerHeight();
val = window.outerWidth();

// Inner height and width
val = window.innerHeight();
val = window.innerWidth();

// Scrroll points
val = window.scrollY();
val = window.scrollX();

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = "http://google.com";

// Reload page
window.location.reload();

// history object
window.history.go(-1); // goes to the page I was before (back button in browser)
val = window.history.length; // how many sites I have visited

// Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
