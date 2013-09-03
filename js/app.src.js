var x = function(){
	console.log('i am x');
	return 5;
}

var y = function(val){
	var x4 = x() * x() * x() * x();
	return x4 + ' is ' + val;
}

console.log(y('ok'));