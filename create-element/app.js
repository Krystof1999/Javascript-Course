// Create elemetn
const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "new-item";

//Add attribute
li.setAttribute("title", "New Item");

// Create text node append
li.appendChild(document.createTextNode("Hello World"));

// Create new link element
const link = document.createElement("a");
// Add class
link.className = "delete-item secondary-content";
// Add icon html
link.html = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);
