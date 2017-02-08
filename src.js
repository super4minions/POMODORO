var rettime;

function timer(i){
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");
	var message = document.getElementById("message");
	var min = [1,5,10];
	timemilliseconds = min.map(function(x){
		return x*60*1000;
	})
	//var i = t;
	var obj = {
		onTime: function(){
			i--;
			if(i < 0){
				message.innerHTML = "Dude Times Up!!";
				document.getElementById("start").disabled = false;
			}else{
				minutes.innerHTML = i;
				console.log("i= ",i);
				rettime = setTimeout(obj.onTime, 1000);
			}
		},
		_time: function (){
			return i;
		}
	}
	return obj;
}

function stop(){
	clearTimeout(rettime);
	document.getElementById("message").innerHTML = "Let's Get Started";
	document.getElementById("start").disabled = false;
}

function go(){
	var t = document.getElementById("points").value;
	document.getElementById("start").disabled = true;
	timer(t).onTime();
}

function pause(){
	console.log("start work");
	console.log(minutes,"  ",seconds,"  ",message);
}

//
// function start(){
//
// }
