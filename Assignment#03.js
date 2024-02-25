// Task : 3 [Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.]
var PerName = "Noor Ul Ain";
console.log("lowercase:", PerName.toLowerCase());
console.log("uppercase:", PerName.toUpperCase());
console.log("titlease:", PerName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
