// Dialog Box
alert("Your message goes here")
confirm("Would uh like to proceed")
const Name = prompt("Please Enter your name")
console.log(Name)
console.log(Name[0]);
console.log(Name.length);

// String Methods and Propeties
const message = 'Hello world'
const mes = "           Hiiiii             "
const Fourdigits = '7685';
// property
console.log(message.length);     

// Methods without parameter
console.log(message.toUpperCase()); 
console.log(message.toLowerCase()); 
console.log(mes.trim()); // removes space
console.log(mes.trimStart()); // removes space at start
console.log(mes.trimEnd()); // removes space at end

// Methods with parameter
console.log(message.includes("o"));
console.log(message.indexOf("w"));
console.log(message.replace("Hello","Hii"));
console.log(message.replaceAll("l","z"));
console.log(message.concat(mes));
console.log(Fourdigits.padStart(16,'*')); // including 7685
console.log(Fourdigits.padEnd(16,"*"));  // including 7685
console.log(message.charAt(8));
console.log(message.charCodeAt(1)); // ASCII value of e
console.log(message.split("H"));
console.log(message.split(""));


