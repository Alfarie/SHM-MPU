var datetime = {
    date: '01/01/2018',
    time: '00:00:00'
}
var freeMemory = 0;
var gpio = [0,0,0,0,0,0];
var paracc = {}
var waterStatus =  { type: "waterprocess-fill", data:{ crt:  0 , max: 0 }};
var co2Status = {
    type: "co2-status", 
    data: {
        mode: 0,
        crt: 0,
        status: 0,
        sensor: 0
    }
}
var phStatus = {
    type: "ph-status", 
    data: {
        mode: 0,
        crt: 0,
        status: 0,
        sensor: 0
    }
}
var ecStatus = {
    type: "ec-status", 
    data: {
        mode: 0,
        crt: 0,
        status: 0,
        sensor: 0
    }
}

module.exports = {
    freeMemory,
    gpio,
    paracc,
    waterStatus,
    co2Status,
    phStatus,
    ecStatus,
    datetime
}