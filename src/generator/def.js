'use strict';

function defineConst(props) {
    var obj = {};

    console.log(props);
    for (var prop in props) {
        Object.defineProperty(obj, prop, {writable: false, value: props[prop]});
    }

    return obj;
}

exports.BEAT = defineConst({
    BEAT_1 : 1,
    BEAT_2 : 2,
    BEAT_3 : 3,
    BEAT_4 : 4,
    BEAT_5 : 5,
    BEAT_6 : 6,
    BEAT_7 : 7,
    BEAT_8 : 8,
    BEAT_9 : 9,
    BEAT_10 : 10,
    BEAT_11 : 11,
    BEAT_12 : 12,
    BEAT_13 : 13,
    BEAT_14 : 14,
    BEAT_15 : 15,
    BEAT_16 : 16
});

exports.NOTE = defineConst({
    NOTE_2 : 2,
    NOTE_4 : 4,
    NOTE_8 : 8,
    NOTE_16 : 16
});
