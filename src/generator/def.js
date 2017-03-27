'use strict';

function defineConst(props) {
    var obj = {};

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
    A2: {
        num: -16,
        locate: "../asset/"
    },
    B2: {
        num: -15,
        locate: ""
    },
    C1: {
        num: -14,
        locate: ""
    },
    D1: {
        num: -13,
        locate: ""
    },
    E1: {
        num: -12,
        locate: ""
    },
    F1: {
        num: -11,
        locate: ""
    },
    G1: {
        num: -10,
        locate: ""
    },
    A1: {
        num: -9,
        locate: ""
    },
    B1: {
        num: -8,
        locate: ""
    },
    C: {
        num: -7,
        locate: ""
    },
    D: {
        num: -6,
        locate: ""
    },
    E: {
        num: -5,
        locate: ""
    },
    F: {
        num: -4,
        locate: ""
    },
    G: {
        num: -3,
        locate: ""
    },
    A: {
        num: -2,
        locate: ""
    },
    B: {
        num: -1,
        locate: ""
    },
    c: {
        num: 0,
        locate: ""
    },
    d: {
        num: 1,
        locate: ""
    },
    e: {
        num: 2,
        locate: ""
    },
    f: {
        num: 3,
        locate: ""
    },
    g: {
        num: 4,
        locate: ""
    },
    a: {
        num: 5,
        locate: ""
    },
    b: {
        num: 6,
        locate: ""
    },
    c1: {
        num: 7,
        locate: ""
    },
    d1: {
        num: 8,
        locate: ""
    },
    e1: {
        num: 9,
        locate: ""
    },
    f1: {
        num: 10,
        locate: ""
    },
    g1: {
        num: 11,
        locate: ""
    },
    a1: {
        num: 12,
        locate: ""
    },
    b1: {
        num: 13,
        locate: ""
    },
    c2: {
        num: 14,
        locate: ""
    },
    d2: {
        num: 15,
        locate: ""
    },
    e2: {
        num: 16,
        locate: ""
    },
    f2: {
        num: 17,
        locate: ""
    },
    g2: {
        num: 18,
        locate: ""
    },
    a2: {
        num: 19,
        locate: ""
    },
    b2: {
        num: 20,
        locate: ""
    },
    c3: {
        num: 21,
        locate: ""
    },
    d3: {
        num: 22,
        locate: ""
    },
    e3: {
        num: 23,
        locate: ""
    },
    f3: {
        num: 24,
        locate: ""
    },
    g3: {
        num: 25,
        locate: ""
    },
    a3: {
        num: 26,
        locate: ""
    },
    b3: {
        num: 27,
        locate: ""
    },
    c4: {
        num: 28,
        locate: ""
    },
    d4: {
        num: 29,
        locate: ""
    },
    e4: {
        num: 30,
        locate: ""
    },
    f4: {
        num: 31,
        locate: ""
    },
    g4: {
        num: 32,
        locate: ""
    },
    a4: {
        num: 33,
        locate: ""
    },
    b4: {
        num: 34,
        locate: ""
    },
    c5: {
        num: 35,
        locate: ""
    }
});

