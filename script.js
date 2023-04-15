function fibonacci(num) {
	let a=0,b=1,fib=0;
	for(let i=0;i<num;i++){
		fib=a+b;
		a=b;
		b=fib;
		
	}
	return fib;
// your code here
}

module.exports = fibonacci;
