//<<<<<<< HEAD
// var test = QUnit.test;
//
// test("Check if function timer exists",function(t){
//   t.ok(window.timer,"it exists")
// });
//
// // <<<<<<< HEAD
// /*test("Check if funtion timer returns time in milliseconds",function(t){
//  min = [1,5,10];
//  t.deepEqual(timer(),[60000, 300000,600000],"it works")
// });
//
// /*
// test("Check if funtion timer is working",function(t){
//  var a = timer();
//  a.onTime();
//  //QUnit.stop(5);
//  t.deepEqual(a._time,0,"it works")
// });
// */
// //
// // Test('my test', function(t) {
// //     //var a = timer();
// //     //a.onTime;
// //     console.log(a);
// //     var done = t.async();
// //     setTimeout(function() {
// //         s//tart(); // this would tell QUnit to start the test
// //         t.deepEqual(a,0,"it works");
// //         done();
// //     }, 6000);
// // =======
// // test("Check if funtion timer returns time in milliseconds",function(t){
// //  min = [1,5,10];
// //  t.deepEqual(timer(),[60000, 300000,600000],"it works")
// // });
//
// test('Check if funtion timer is working', function (t) {
//   var a = timer();
// 	a.onTime();
// 	var done = t.async( 1 );
// window.setTimeout(function() {
// 	  t.equal(a._time(), 0, 'It works'); done();
//    }, 5000);
//
// // >>>>>>> b1560420ee12483ca020f07a45ee9cc0fb79dc0e
// });
//=======
var test = QUnit.test;

test("Check if function timer exists", function(t) {
    t.ok(window.timer, "it exists")
});

// test("Check if funtion timer returns time in milliseconds",function(t){
//  min = [1,5,10];
//  t.deepEqual(timer(),[60000, 300000,600000],"it works")
// });

test('Check if funtion timer is working', function(t) {
    var a = timer();
    a.onTime();
    var done = t.async(1);
    window.setTimeout(function() {
        t.equal(a._time(), 0, 'It works');
        done();
    }, 5000);

});
//>>>>>>> 7ab1a8cf3ddac94ef92e9d3f0b681b2b33f7f80c
