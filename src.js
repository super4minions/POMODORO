var rettime;

function timer(i){
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var message = document.getElementById("message");
    i = i * 60;
    var s;
    var obj = {
        onTime: function(){
            if(i == 0){
                message.innerHTML = "Dude Times Up!!";
                document.getElementById("start").disabled = false;
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            }else{
                if (i%60 == 0){
                            if ((i/60)-1 > 0){minutes.innerHTML = ((i/60) < 10 ? '0' : '') + ((i/60)-1);}
                            else{minutes.innerHTML = '00';}
                            s = 59;
                            seconds.innerHTML = (s < 10 ? '0' : '') + s--;
                        }else{
                            seconds.innerHTML = (s < 10 ? '0' : '') + s--;
                        }
                //console.log("i= ",i);
                i--;
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
        return true;
}

function go(){
    var t = document.getElementById("points").value;
    document.getElementById("start").disabled = true;
    document.getElementById("minutes").innerHTML = (t < 10 ? '0' : '') + t;
    document.getElementById("message").innerHTML = "Let's Get Started";
    timer(t).onTime();
}

function pause(){
    clearTimeout(rettime);
}

function reset(){
    clearTimeout(rettime);
    document.getElementById("message").innerHTML = "Let's Get Started";
    document.getElementById("start").disabled = false;
    var t = document.getElementById("points").value;
    document.getElementById("minutes").innerHTML = (t < 10 ? '0' : '') + t;
    document.getElementById("seconds").innerHTML = '00';    
}
