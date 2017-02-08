var test = QUnit.test;

test("Check if function timer exists",function(t){
  t.ok(window.timer,"it exists")
});

// test("Check if funtion timer returns time in milliseconds",function(t){
//  min = [1,5,10];
//  t.deepEqual(timer(),[60000, 300000,600000],"it works")
// });

test('Check if funtion timer is working', function (t) {
    var a = timer();
	a.onTime();
	var done = t.async( 1 );
window.setTimeout(function() {
	  t.equal(a._time(), 0, 'It works'); done();
   }, 5000); 

});
