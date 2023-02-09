let val;

const today = new Date();
let birthDay = new Date("9-10-1999 11:25:00");
birthDay = new Date("September 10 1999");
birthDay = new Date("9/10/1999");

val = today.getMonth(); // months are from 0 to 11
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthDay.setMonth(2);
birthDay.setDate(12);
birthDay.setFullYear(1998);
birthDay.setHours(3);
birthDay.setMinutes("23");
birthDay.setSeconds("22");

val = today;
