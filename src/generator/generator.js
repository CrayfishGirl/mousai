'use strict';

var DEF = require('./def.js');

var Generator = function (){
    var _default_segment = 1;
    var _default_beat = DEF.BEAT.BEAT_4;
    var _default_high_note = DEF.NOTE.c1;
    var _default_low_note = DEF.NOTE.C;

    // options {
    //     scale : [],
    //     segment : m,
    //     beat : n
    // }
    function random(options) {
        if (options) {
            var beat = options.beat ? options.beat : _default_beat;
            var segment = options.segment ? options.segment : _default_segment;
            var low_note = options.scale[0] ? options.scale[0] : _default_low_note;
            var high_note = options.scale[1] ? options.scale[1] : _default_high_note;
            /*
            console.log('beat = ' + beat);
            console.log('segment = ' + segment);
            console.log('low_note = ' + low_note);
            console.log('high_note = ' + high_note);
            */
            
            var seg = [];
            for (var i = 0; i < segment; ++i) {
                var sub_seg = [];
                for (var j = 0; j < beat; ++j) {
                    var key = Math.round(Math.random() * (high_note.num - low_note.num) + low_note.num);
                    sub_seg.push(key);
                }
                seg.push(sub_seg);
            }

            console.log(seg);
        } else {
            var seg = [];
            for (var i = 0; i < _default_beat; ++i) {
                var key = Math.round(Math.random() * (_default_high_note.num - _default_low_note.num) + _default_low_note.num);
                seg.push(key);
            }

            console.log(seg);
        }
    }

    return {
        random: random
    };
};

module.exports = Generator;