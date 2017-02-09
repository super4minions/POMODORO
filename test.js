var test = QUnit.test;

test("Check if function timer exists", function(t) {
    t.ok(window.timer, "it exists")
});

// test("Check if funtion timer returns time in milliseconds",function(t){
//  min = [1,5,10];
//  t.deepEqual(timer(),[60000, 300000,600000],"it works")
// });

test('Check if funtion timer/Start are working', function(t) {
    var a = timer(.1);
    a.onTime();
    var done = t.async(1);
    window.setTimeout(function() {
        t.equal(a._time(), 0, 'Start Fun is work');
        done();
    }, 6000);
});

test('Check if funtion Stop is working', function(t) {
    var a = timer(.1);
    a.onTime();
    var done = t.async(1);
    window.setTimeout(function() {
        t.equal(stop(), true, 'Stop Fun is work');
        done();
    }, 3000);
});
