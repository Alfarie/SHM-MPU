var mcu = require('./mcu')
var moment = require('moment');
setTimeout(() => {
    setInterval(() => GetSensors(), 3000);
    setInterval(() => GetDateTime(), 1000);
}, 1000);
var RandomFloat = function (min, max) {
    var value = Math.random() * (max - min) + min;
    return parseFloat(value.toFixed(2));
}
var RandomInt = function (min, max) {
    var value = Math.random() * (max - min) + min;
    return parseFloat(value.toFixed(0));
}

var GetSensors = () => {
    var data = {
        ph: RandomFloat(2, 3),
        water: RandomFloat(20, 30),
        vpd: parseInt(RandomFloat(1500, 1600)),
        temperature: RandomFloat(23, 25),
        humidity: RandomFloat(50, 60),
        ec: RandomFloat(2, 3),
        co2: RandomInt(1000, 1200),
        light: RandomInt(10000, 12000),
        floating: 0
    }
    // mcu.Subject.GetSensorsSubject(data);
    mcu.Subject.GetSensorsSubject.next(data);
}

var GetDateTime = () => {
    var data = {
        date: moment().format('YYYY-MM-DD'),
        time: moment().format('HH:mm:ss')
    }
}