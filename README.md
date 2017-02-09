# POMODORO Timer.
``Basic time management tool.`` 



##User stories.
    As a client looking for a time management tool.
> I want a timer that helps me ```Set``` 
> a speceific interval of time.

    As a client looking for a time management tool.
> I want a timer that helps me ```Start``` count down 
> the speceified interval of time.

    As a client looking for a time management tool.
> I want a timer that shows me the remaining time 
> before the end of the specified time interval.

    As a client looking for a time management tool.
> I want a timer that pauses/upauses the countdown when
> pressing the ```Pause``` button.

    As a client looking for a time management tool.
> I want a timer that resets the countdown when
> pressing the ```Reset``` button.


##Process of building our client's Pomodoro.
    1. Sketching out requirments/features.

![alt](https://s30.postimg.org/hq4mgi6b5/Scan_Feb_8_14_36.jpg)

    2. Test First! [Test Driven Development approach].

![alt](http://lh5.ggpht.com/_o7Td6KCGNTA/Syj1PJzUtRI/AAAAAAAAAcc/p3ri4xfMGu0/s1600-h/image%5B25%5D.pn)

>>After Each failing test, part of the code is written||modified to pass it.
>>And againg we repeat the process again till we cover the required features
>>with proven "passing" tests.

**ls of Tests conducted:**

    * Check if the function ```Timer``` exists.

```javascript
test = QUnit.test;

test("Check if function timer exists", function(t) {
    t.ok(window.timer, "it exists")
});
```

    * Check if the function ```Timer``` is working/countingdown.

```javascript
test('Check if funtion timer is working', function(t) {
    var a = timer();
    a.onTime();
    var done = t.async(1);
    window.setTimeout(function() {
        t.equal(a._time(), 0, 'It works');
        done();
    }, 5000);
});
```





