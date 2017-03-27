var DEF = require('./def.js');
var generator = require('./generator.js');
var GEN = generator();

console.log('----- Test for random without options');
console.log('----- Expect Value: [C(-7), c1(7)]');
console.log('----- Expect Num: 1 * 4');
for (var i = 0; i < 10; ++i) {
    console.log(GEN.random());
}

console.log('----- Test for random with options');
console.log('----- Expect Value: [F1(-11), d3(22)]');
console.log('----- Expect Num: 3 * 6');
console.log(GEN.random({scale:[DEF.NOTE.F1, DEF.NOTE.d3], segment:3, beat:6}));

console.log('----- Expect Value: [A(-2), b1(13)]');
console.log('----- Expect Num: 2 * 8');
console.log(GEN.random({scale:[DEF.NOTE.A, DEF.NOTE.b1], segment:2, beat:8}));

console.log('----- Expect Value: [A2(-16), c5(35)]');
console.log('----- Expect Num: 10 * 16');
console.log(GEN.random({scale:[DEF.NOTE.A2, DEF.NOTE.c5], segment:10, beat:16}));
