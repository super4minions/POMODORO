var test = QUnit.test;

test("Check if function timer exists",function(t){
  t.ok(window.timer,"it exists")
});

/*test("Check if funtion timer returns time in milliseconds",function(t){
 min = [1,5,10];
 t.deepEqual(timer(),[60000, 300000,600000],"it works")
});

/*
test("Check if funtion timer is working",function(t){
 var a = timer();
 a.onTime();
 //QUnit.stop(5);
 t.deepEqual(a._time,0,"it works")
});
*/

Test('my test', function(t) {
    //var a = timer();
    //a.onTime;
    console.log(a);
    var done = t.async();
    setTimeout(function() {
        s//tart(); // this would tell QUnit to start the test
        t.deepEqual(a,0,"it works");
        done();
    }, 6000);
});
