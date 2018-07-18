
var mcu = require('./mcu')
var parAcc = 0;
var moment = require('moment');
var RandomFloat = function (min, max) {
    var value = Math.random() * (max - min) + min;
    return parseFloat(value.toFixed(2));
}
var RandomInt = function (min, max) {
    var value = Math.random() * (max - min) + min;
    return parseFloat(value.toFixed(0));
}

function Loop() {
    Sensors();
}

function Sensors() {
    var sensor = {
        type: 'sensors',
        data: {
            ph: RandomFloat(2, 3),
            water: RandomFloat(20, 30),
            vpd: parseInt(RandomFloat(1500, 1600)),
            temperature: RandomFloat(23, 25),
            humidity: RandomFloat(50, 60),
            ec: RandomFloat(2, 3),
            co2: RandomInt(1000, 1200),
            light: RandomInt(10000, 12000),
            floating: 0,
            date: moment().format('YYYY-MM-DD'),
            time: moment().format('HH:mm:ss')
        }
    }
    console.log(sensor);
}

var state = ['fill', 'cir', 'wait', 'bsch'];
var i = 0;
var sec = 0;
function StartWaterReqeust() {
    setInterval(function(){
        let water = {
            type: 'waterprocess-' + state[i], 
            data: {
                crt: sec++,
                max: 10
            }
        }
        if(sec >= water.data.max) {
            sec = 0;
            i++;
            if(state[i] == undefined) i =0;
        }
        // mcu.ExecJsonCommand(water);
    },1000);
}
function StartSensorRequest() {
    setInterval(Loop, 1000);
}

function Initialize(Mcu) {
    console.log('[Info] Demo Version.');
    mcu = Mcu;
    StartSensorRequest();
    StartWaterReqeust();
}

module.exports = {
    Initialize
}