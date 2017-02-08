<<<<<<< HEAD
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
=======
function timer() {

    var min = [1, 5, 10];
    timemilliseconds = min.map(function(x) {
        return x * 60 * 1000;
    })

    var i = 5;
    var obj = {
        onTime: function() {
            i--;
            if (i < 0) {
                console.log("times up!!");
            } else {
                console.log("i= ", i);
                setTimeout(obj.onTime, 1000);
            }
        },
        _time: function() {
            return i;
        }

    }
    return obj;
}
>>>>>>> 7ab1a8cf3ddac94ef92e9d3f0b681b2b33f7f80c
