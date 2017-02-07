function timer(){

	var min = [1,5,10];
	timemilliseconds = min.map(function(x){
		return x*60*1000;
	})
	
	var i = 5;
	var obj = {
		onTime: function(){
			i--;
			if(i < 0){
				console.log("times up!!");
			}else{
				console.log("i= ",i);
				setTimeout(obj.onTime, 1000);
			}
		//return obj
		},
		_time:i

	}

	//var i = 10;
	//setTimeout(function(){console.log(i);}, 5000); 
	return obj;
}