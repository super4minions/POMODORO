# POMODORO Timer.
Basic time management [tool].
[tool]: https://super4minions.github.io/POMODORO/



## User stories.


    As a client looking for a time management tool.
> I want a timer that helps me ```Set``` 
> a specific interval of time.

    As a client looking for a time management tool.
> I want a timer that helps me ```Start``` count down 
> the specified interval of time.

    As a client looking for a time management tool.
> I want a timer that shows me the remaining time 
> before the end of the specified time interval.

    As a client looking for a time management tool.
> I want a timer that pauses/upauses the countdown when
> pressing the ```Pause``` button.

    As a client looking for a time management tool.
> I want a timer that resets the countdown when
> pressing the ```Reset``` button.


## Process of building our client's Pomodoro.


    1. Sketching out requirments/features.

![alt](https://s30.postimg.org/hq4mgi6b5/Scan_Feb_8_14_36.jpg)

    2. Test First! [Test Driven Development approach].

![alt](https://image.ibb.co/dqDP5a/tddSteps.jpg)


>After Each failing test, part of the code is written||modified to pass it.
>And againg we repeat the process again till we cover the required features
>with proven "passing" tests.

## List of Tests.


* Check if the function ```Timer``` exists.

```javascript
test = QUnit.test;

test("Check if function timer exists", function(t) {
    t.ok(window.timer, "it exists")
});
```

* Check if the function Timer _starts_ working/countingdown.

```javascript
test('Check if funtion timer/Start are working', function(t) {
    var a = timer(.1);
    a.onTime();
    var done = t.async(1);
    window.setTimeout(function() {
        t.equal(a._time(), 0, 'Start Func works');
        done();
    }, 6000);
});
```

* Check if the function Timer _stops_ working/countingdown.

```javascript
test('Check if funtion timer/Start are working', function(t) {
    var a = timer(.1);
    a.onTime();
    var done = t.async(1);
    window.setTimeout(function() {
        t.equal(a._time(), 0, 'Start Func works');
        done();
    }, 6000);
});
```

  3. Building the ``HTML-index`` and ``CSS-style`` files 
and linking the Timer Script.
