var test = QUnit.test;

test("Check if function timer exists",function(t){
  t.ok(window.timer,"it exists")
});

test("Check if funtion timer returns time in milliseconds",function(t){
 min = [1,5,10];
 t.deepEqual(timer(),[60000, 300000,600000],"it works")
});

test("Check if funtion timer is working",function(t){
 var a = timer();
 a.onTime();
 QUnit.stop(5);
 t.deepEqual(a._time,5,"it works")
});