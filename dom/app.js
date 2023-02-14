const val;

val = document
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;


val = documen.forms;
val = documen.forms[0];
val = documen.forms[0].id;
val = documen.forms[0].method;
val = documen.forms[0].action;

val = document.links;
val = document.links[0]
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts;
val = documemt.scripts[2].getAttribute('src')


let scripts = document.scripts;
let scriptsArr = Array.from(scripts)

scriptsArr.forEach((script) => {
    console.log(script)
})
