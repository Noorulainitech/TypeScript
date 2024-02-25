// Task : 37 [Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.]
function make_shirts(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I Love Transript'; }
    console.log("\n shirt size: ".concat(size, ",").concat(text));
}
make_shirts();
make_shirts('medium');
