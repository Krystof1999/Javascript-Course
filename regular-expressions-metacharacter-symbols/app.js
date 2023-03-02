let re;
// Literal characters
re = /hello/; //false
re = /hello/i; // matches

// Metacharacter Symbols
re = /^h/i; // ^ means - start with (start with h)
re = /d$/i; // ^ means - ends with (ends with d)
re = /^hello$/i; // must start and end with hello
re = /h.llo/i; // it can be ONE random charatcer (h5llo, hvllo, h,llo)
re = /h*llo/i; // it can be MULTIPLE random character (h32454325llo, hsafadsfllo)
re = /gre?a?y/i; // optional character (grey, gray)
re = /gre?a?y\?/i; // escape characters (grey?, gray?)

// Brackets [] - Character Sets
re = /gr[ae]y/i; // it could be only a or e
re = /[GF]ray/; // must be G or F uppercase
re = /[^GF]ray/; // must be different than G or F
re = /[A-Z]ray/; // must be any uppercase letter
re = /[A-Za-z]ray/; // must be any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // must have 2 l (the character that is before the braces)
re = /Hel{2,4}o/i; // must have 2 to 4 l
re = /Hel{2,}o/i; // must have at least 2 l (2 or more)

// Paretheses () - Grouping
re = /^([0-9]x){3}$/; // number x 3 times

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _ (any number or letter or _)
re = /\w+/; // one or more
re = /\W/; // Non word characters (anything but letter, number or _)
re = /\d/; // Match any digit (the first one)
re = /\d+/; // Match any digit (all of them)
re = /\D/; // Non digit
re = /\s/; // Match whitespace character
re = /\S/; // Match non whitespace character
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if it is followed by y
re = /x(?!y)/; // Match x only if it is not followed by y

const str = "Hello World";
const result = re.exac(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
