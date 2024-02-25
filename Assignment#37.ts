// Task : 37 [Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.]

function make_shirts(size: string = 'large', text: string = 'I Love Transript'){
    console.log(`\n shirt size: ${size},${text}`);
}

make_shirts();
make_shirts('medium');