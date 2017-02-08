var i = 5;

function timer(){

	var min = [1,5,10];
	timemilliseconds = min.map(function(x){
		return x*60*1000;
	})
		var y = onTime();
		console.log(y);
		return y
	}

	function onTime(){
		if(i < 0){
			console.log("times up!! i = ",i+1);
			return i;
		}else{
			console.log("i= ",i);
			i = i-1;
			setTimeout(onTime, 1000);
		}
	//return i;
	}
	//var i = 10;
	//setTimeout(function(){console.log(i);}, 5000);
