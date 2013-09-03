var x = function(){
	console.log('i am x');
	return 5;
};

var y = function(val){
	var x1 = x();
	return x1 + ' is ' + val;
};

console.log(y('ok'));
