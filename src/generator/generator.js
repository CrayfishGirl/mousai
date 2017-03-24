'use strict';

var DEF = require('./def.js');

var Generator = function (){
    var _default_beat = DEF.BEAT.BEAT_4;
    var _default_note = DEF.NOTE.NOTE_4;

    // options {
    //     scale : [],
    //     segment : m,
    //     beat : n
    // }
    function random(options) {
        if (parameter) {

        } else {
            var seg = [];
            for (var i = 0; i < _default_segment; ++i) {
                var key = Math.round(Math.random() * 6 + 1);
                seg.push(key);
            }
            console.log(seg);
        }
    }

    return {
        random: random
    }
};

module.exports = Generator;